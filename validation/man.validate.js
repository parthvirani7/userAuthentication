const Joi = require("joi");

const addManager = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().trim(),
    salary: Joi.string().required().trim(),
    designation: Joi.string().required().trim(),
    status: Joi.boolean(),
  })
};

module.exports = {
  addManager
};