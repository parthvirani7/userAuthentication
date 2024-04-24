const { adminSchema } = require("../models");

const addAdmin = (body) => {
 
  return adminSchema.create(body);
  
};

const getAdmin = () => {
  return adminSchema.find();
};
const findAdmin = (email) => {
  return adminSchema.findOne({email:email});
};

const updateAdmin = (id, body) => {
  return adminSchema.findByIdAndUpdate(id, body);
};

const getAdminByEmail = (email) => {
  return adminSchema.findOne({ email });
};
const deleteAdmin = (id) => {
  return adminSchema.findByIdAndDelete(id);
};

const SearchAdmin = async (query) => {
  return adminSchema.find(query);
};

const pagination = async (Index, size) => {
  return adminSchema.find().skip(Index).limit(size);
};
module.exports = { addAdmin,getAdmin,updateAdmin,deleteAdmin,SearchAdmin,findAdmin,getAdminByEmail,pagination};