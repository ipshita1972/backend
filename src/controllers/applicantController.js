const Applicant = require("../models/Applicant");

exports.submitApplication = async (req, res) => {
    try {
    const applicant = await Applicant.create({
        ...req.body,
        status: "applied"
    });

    res.status(201).json(applicant);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};


exports.getAllApplicants = async (req, res) => {
    const applicants = await Applicant.find();
    res.status(200).json(applicants);
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


