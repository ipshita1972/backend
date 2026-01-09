const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { id: admin._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.status(200).json({
        token,
        admin: { id: admin._id, email: admin.email }
    });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

