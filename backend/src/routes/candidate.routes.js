 const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const controller = require("../controllers/candidate.controller");
const {
  authMiddleware,
} = require("../middleware/auth.middleware");

// APPLY
router.post(
  "/apply",
  upload.single("resume"),
  controller.applyCandidate
);

// ADMIN
router.get(
  "/",
  authMiddleware,
  controller.getCandidates
);

router.patch(
  "/:id/status",
  authMiddleware,
  controller.updateStatus
);

router.delete(
  "/:id",
  authMiddleware,
  controller.deleteCandidate
);

router.post(
  "/:id/send-offer",
  authMiddleware,
  controller.sendOffer
);

module.exports = router;