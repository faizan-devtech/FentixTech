 const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    whatsapp: String,
    domain: String,
    university: String,

    resumePath: String,

    offerLetterUrl: String,

    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true } // 👈 this gives createdAt (date/time)
);

module.exports = mongoose.model("Candidate", candidateSchema);