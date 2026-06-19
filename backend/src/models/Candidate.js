 const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    whatsapp: { type: String, required: true },
    domain: { type: String, required: true },
    role: { type: String }, // Added for offer letter
    resumePath: { type: String, required: true },
    offerLetterUrl: { type: String },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Candidate", candidateSchema);