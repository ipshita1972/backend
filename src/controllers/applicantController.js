const Applicant = require("../models/Applicant");

exports.submitApplication = async (req, res) => {
  try {
    // Map roleApplied to role if it exists (for backward compatibility)
    const applicantData = { ...req.body };
    if (applicantData.roleApplied && !applicantData.role) {
      applicantData.role = applicantData.roleApplied;
      delete applicantData.roleApplied;
    }

    const applicant = await Applicant.create({
      ...applicantData,
      status: "applied"
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: applicant
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(400).json({ 
      success: false,
      error: error.message 
    });
  }
};


exports.getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const applicant = await Applicant.findById(id);

    if (!applicant) {
      return res.status(404).json({ message: "Applicant not found" });
    }

    applicant.status = status;
    await applicant.save();

    res.status(200).json({
      message: "Status updated successfully",
      applicant
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




