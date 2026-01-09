const Joi = require("joi");

exports.applicantSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),

    email: Joi.string().email().required(),

    phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional(),

    department: Joi.string().max(50).optional(),

    year: Joi.string().optional(),

    roleApplied: Joi.string().max(50).required(),

    answers: Joi.array().items(Joi.string().max(500)).optional()
});
