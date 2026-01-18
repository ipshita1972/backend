const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  department: String,
  year: String,
  role: String,
  answers: [String],
  status: {
    type: String,
    enum: ["applied", "shortlisted", "rejected"],
    default: "applied"
  }
}, { timestamps: true });

module.exports = mongoose.model("Applicant", applicantSchema);



