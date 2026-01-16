const mongoose = require("mongoose");

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
    console.warn("MONGO_URI not set; skipping MongoDB connection (development).");
    return;
    }

    try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
    } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    }
};

module.exports = connectDB;


