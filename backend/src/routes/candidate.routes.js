 const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const controller = require("../controllers/candidate.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

// Debug: Check if controller functions exist
console.log("Controller functions:", Object.keys(controller));

// APPLY CANDIDATE (NO AUTH REQUIRED)
router.post(
  "/apply",
  upload.single("cv"),
  controller.applyCandidate
);

// GET ALL CANDIDATES (AUTH REQUIRED)
router.get(
  "/",
  authMiddleware,
  controller.getCandidates
);

// UPDATE STATUS (AUTH REQUIRED)
router.patch(
  "/:id/status",
  authMiddleware,
  controller.updateStatus
);

// DELETE CANDIDATE (AUTH REQUIRED)
router.delete(
  "/:id",
  authMiddleware,
  controller.deleteCandidate
);

// SEND OFFER (AUTH REQUIRED)
router.post(
  "/:id/send-offer",
  authMiddleware,
  controller.sendOffer
);

module.exports = router;