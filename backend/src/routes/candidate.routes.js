 const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const controller = require("../controllers/candidate.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

// =======================
// APPLY CANDIDATE (FIXED)
// =======================
router.post(
  "/apply",
  upload.single("cv"),
  controller.applyCandidate
);

// =======================
// GET ALL CANDIDATES
// =======================
router.get(
  "/",
  authMiddleware,
  controller.getCandidates
);

// =======================
// UPDATE STATUS
// =======================
router.patch(
  "/:id/status",
  authMiddleware,
  controller.updateStatus
);

// =======================
// DELETE
// =======================
router.delete(
  "/:id",
  authMiddleware,
  controller.deleteCandidate
);

// =======================
// SEND OFFER
// =======================
router.post(
  "/:id/send-offer",
  authMiddleware,
  upload.single("offer"),
  controller.sendOffer
);

module.exports = router;