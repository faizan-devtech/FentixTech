 const Candidate = require("../models/Candidate");
const { generateOfferPDFAndUpload } = require("../utils/generateOffer");
const { sendOfferEmail } = require("../utils/sendEmail");
const uploadToCloudinary = require("../utils/uploadToCloudinary");

// ===============================
// APPLY CANDIDATE
// ===============================
exports.applyCandidate = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE EXISTS:", !!req.file);

    const { firstName, lastName, email, whatsapp, domain } = req.body;

    // Validate file
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required",
      });
    }

    // Check duplicate
    const existing = await Candidate.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "You have already applied!",
      });
    }

    console.log("Uploading resume to Cloudinary...");

    // Upload file to Cloudinary (FIXED)
    const uploadResult = await uploadToCloudinary(req.file.buffer);

    console.log("Upload success:", uploadResult.secure_url);

    // Save candidate
    const candidate = await Candidate.create({
      firstName,
      lastName,
      email,
      whatsapp,
      domain,
      role: domain,
      resumePath: uploadResult.secure_url,
      status: "pending",
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully!",
      candidate,
    });

  } catch (err) {
    console.error("🔥 APPLY ERROR:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ===============================
// GET ALL CANDIDATES
// ===============================
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().sort({ createdAt: -1 });
    res.json(candidates);
  } catch (err) {
    console.error("Get candidates error:", err);
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// UPDATE STATUS
// ===============================
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const candidate = await Candidate.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json({ message: "Status updated", candidate });
  } catch (err) {
    console.error("Update status error:", err);
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// DELETE CANDIDATE
// ===============================
exports.deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;

    const candidate = await Candidate.findByIdAndDelete(id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    res.json({ message: "Candidate deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// SEND OFFER
// ===============================
 exports.sendOffer = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    if (candidate.offerLetterUrl) {
      return res.json({
        message: "Offer already generated",
        offerLetterUrl: candidate.offerLetterUrl,
        candidate,
      });
    }

    console.log("Generating offer letter...");

    // ✅ Puppeteer result (IMPORTANT FIX)
    const result = await generateOfferPDFAndUpload(candidate);

    console.log("Offer generated:", result);

    // ✅ Save ONLY string URL in DB
    candidate.offerLetterUrl = result.viewUrl;
    candidate.status = "accepted";

    await candidate.save();

    // ✅ Email fix (send download link OR attach buffer if you want later)
    try {
      await sendOfferEmail(
        candidate.email,
        result.downloadUrl
      );
    } catch (emailErr) {
      console.log("Email error:", emailErr.message);
    }

    return res.json({
      message: "Offer generated successfully",
      offerLetterUrl: result.downloadUrl, // for frontend download
      viewUrl: result.viewUrl,
      candidate,
    });

  } catch (err) {
    console.error("SEND OFFER ERROR:", err);

    return res.status(500).json({
      message: "Offer generation failed",
      error: err.message,
      stack: err.stack,
    });
  }
};