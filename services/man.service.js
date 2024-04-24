const { managerSchema } = require("../models");

const addManager = (body) => {
  return managerSchema.create(body);  
};

const getManager = () => {
  return managerSchema.find();
};
const findManager = (email) => {
  return managerSchema.findOne({email:email});
};

const updateManager = (id, body) => {
  return managerSchema.findByIdAndUpdate(id, body);
};

const getManagerByEmail = (email) => {
  return managerSchema.findOne({ email });
};
const deleteManager = (id) => {
  return managerSchema.findByIdAndDelete(id);
};

const SearchManager = async (query) => {
  return managerSchema.find(query);
};

const pagination = async (Index, size) => {
  return managerSchema.find().skip(Index).limit(size);
};
module.exports = { addManager,getManager,updateManager,deleteManager,SearchManager,findManager,getManagerByEmail,pagination};