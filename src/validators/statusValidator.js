const Joi = require("joi");

exports.statusSchema = Joi.object({
    status: Joi.string()
    .valid("applied", "shortlisted", "rejected")
    .required()
});
