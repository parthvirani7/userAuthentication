const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
},{
    timestamps:true,
});

const manager = mongoose.model('manager', managerSchema);

module.exports = manager;
