const express = require("express");
const { loginAdmin } = require("../controllers/adminController");
const { validate } = require("../middlewares/validateRequest");
const { adminLoginSchema } = require("../validators/adminValidator");


const router = express.Router();


router.post(
    "/login",
    validate(adminLoginSchema),
    loginAdmin
);

module.exports = router;

