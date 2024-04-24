const { string } = require("joi");
const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password  : {
      type: String,
      required: true,
    },
    confirm_password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default:true,
    },
  },
  {
    timestamps: true,
  }
);

const admin = mongoose.model("adminSchema", adminSchema);

module.exports = admin
