const express = require("express");
const cors = require("cors");
const applicantRoutes = require("./routes/applicantRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { apiLimiter } = require("./middlewares/rateLimiter");


const app = express();

app.use(express.json());
app.use(
    cors({
    origin: "*"
    })
);
app.use("/api/v1/applicants", applicantRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api", apiLimiter);

app.get("/", (req, res) => {
    res.send("Club Audition Backend Running");
});

module.exports = app;

