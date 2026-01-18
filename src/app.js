const express = require("express");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");
const { apiLimiter } = require("./middlewares/rateLimiter");





const app = express();
const applicantRoutes = require("./routes/applicantRoutes");

app.use(
  cors({
    origin: "*"
  })
);
app.use(express.json());
app.use("/api", apiLimiter);
app.use("/api/v1/applicants", applicantRoutes);
app.use("/api/v1/admin", adminRoutes);



app.get("/", (req, res) => {
  res.send("Club Audition Backend Running");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found"
  });
});

// Error handler middleware 
const { errorHandler } = require("./utils/errorHandler");
app.use(errorHandler);

module.exports = app;


