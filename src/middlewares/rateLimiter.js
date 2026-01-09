const rateLimit = require("express-rate-limit");

exports.apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
    message: "Too many requests. Please try again later."
    }
});


exports.applyLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
    max: 5,
    message: {
    message: "Too many applications from this IP. Try later."
    }
});
