const Joi = require("joi");

exports.adminLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});
