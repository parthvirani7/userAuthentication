const Joi = require("joi");

const addTask = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    confirm_password: Joi.string().required().trim(),
    status:Joi.string().required(),
  }),
}
module.exports = {
  addTask,
};
