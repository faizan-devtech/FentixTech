 const Candidate = require("../models/Candidate");
const { generateOfferLetter } = require("../utils/offerLetter");

// APPLY CANDIDATE
exports.applyCandidate = async (req, res) => {
  resumePath: `/uploads/cvs/${req.file.filename}`
  try {
    const {
      firstName,
      lastName,
      email,
      whatsapp,
      domain,
        
    } = req.body;
 
    

    const candidate = await Candidate.create({
      firstName,
      lastName,
      email,
      whatsapp,
      domain,
      resumePath: req.file?.path || null,
      status: "pending",
    });

    res.status(201).json({
      message: "Application submitted successfully",
      candidate,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};

// GET ALL
exports.getCandidates = async (req, res) => {
  try {
    const data = await Candidate.find().sort({
      createdAt: -1,
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: "Fetch failed",
      error: err.message,
    });
  }
};

// UPDATE STATUS ONLY
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowed = [
      "pending",
      "accepted",
      "rejected",
    ];

    if (!allowed.includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
      });
    }

    const candidate = await Candidate.findById(
      req.params.id
    );

    if (!candidate) {
      return res.status(404).json({
        message: "Candidate not found",
      });
    }

    candidate.status = status;

    await candidate.save();

    res.json({
      message: "Status updated",
      candidate,
    });
  } catch (err) {
    res.status(500).json({
      message: "Status update failed",
      error: err.message,
    });
  }
};

// DELETE
exports.deleteCandidate = async (req, res) => {
  try {
    const deleted =
      await Candidate.findByIdAndDelete(
        req.params.id
      );

    if (!deleted) {
      return res.status(404).json({
        message: "Candidate not found",
      });
    }

    res.json({
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Delete failed",
      error: err.message,
    });
  }
};
  exports.sendOffer = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);

    if (!candidate) {
      return res.status(404).json({
        message: "Candidate not found",
      });
    }

    // 🔥 generate offer letter
    const offerUrl = await generateOfferLetter(candidate);

    if (!offerUrl) {
      return res.status(500).json({
        message: "Offer generation failed (no file returned)",
      });
    }

    // 🔥 ensure correct URL format
    candidate.offerLetterUrl = offerUrl;
    candidate.status = "accepted";

    await candidate.save();

    res.json({
      message: "Offer generated successfully",
      offerLetterUrl: offerUrl,
      candidate,
    });

  } catch (err) {
    res.status(500).json({
      message: "Offer generation failed",
      error: err.message,
    });
  }
};