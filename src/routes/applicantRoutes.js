const express = require("express");
const {
    submitApplication,
    getAllApplicants
} = require("../controllers/applicantController");
const { protect } = require("../middlewares/authMiddleware");
const { validate } = require("../middlewares/validateRequest");
const { applicantSchema } = require("../validators/applicantValidator");
const { updateStatus } = require("../controllers/applicantController");
const { protect } = require("../middlewares/authMiddleware");
const { validate } = require("../middlewares/validateRequest");
const { statusSchema } = require("../validators/statusValidator");
const { applyLimiter } = require("../middlewares/rateLimiter");




const router = express.Router();

router.post("/apply", submitApplication);
router.post(
    "/apply",
    applyLimiter,
    validate(applicantSchema),
    submitApplication
);
router.get("/", getAllApplicants);
router.get("/", protect, getAllApplicants);
router.post(
    "/apply",
    validate(applicantSchema),
    submitApplication
);
router.patch(
    "/:id/status",
    protect,
    validate(statusSchema),
    updateStatus
);


module.exports = router;

