const { verifyToken, createToken } = require("../middlewares/auth");
const { adminService } = require("../services");
const { findAdmin } = require("../services/admin.service");
const path = require("path");
const fs = require("fs");

// ADD Admin

// http://localhost:3001/v1/admin/add
const addAdmin = async (req, res) => {
  try {
    const body = req.body;

    console.log(body,);
    const admin = await adminService.addAdmin(body);

    if (!admin) {
      throw new Error("Something went wrong");
    }
    else{

      res.render("./login.ejs")

    }

    // res.status(201).json({
    //   message: "Admin Created success",
    //   data: Admin,
    // });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET Admin

// http://localhost:3001/v1/admin/get

const getAdmin = async (req, res) => {
  const admin = await adminService.getAdmin();
  console.log(Admin, "Admin get");

  res.status(200).json({
    message: "Admin get success",
    data: admin,
  });
};

const loginAdmin = async (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;

  console.log(body);

  const findAdmin = await adminService.findAdmin(email);

  console.log(findAdmin); 

  if (!findAdmin) {
    res.status(500).json({
      message: "Admin not found",
    });
  } else {
    if (password === findAdmin.password) {
      let data = {
        _id: findAdmin._id,
        email: findAdmin.email,
        username: findAdmin.username,

      };

      const token = createToken(data);

      res.cookie("login_token", token);

      res.render("./success.ejs")
      // res.status(200).json({
      //   message: "login success",
      // });
    } else {
      res.status(500).json({
        message: "Enter valid password",
      });
    }
  }
};

// UPDATE Admin

// http://localhost:3001/v1/admin/update/:<`id`>
const updateAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const admin = await adminService.updateAdmin(id, body);
    res.status(200).json({
      message: "Admin updated success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// http://localhost:3001/v1/admin/delete/:<`id`>
// DELETE Admin
const deleteAdmin = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const admin = await adminService.deleteAdmin(id);
    if (!admin) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "Admin delete success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
// http://localhost:3001/v1/admin/search?name=<`name`>

const SearchAdmin = async (req, res) => {
  try {
    const { name, email, phone } = req.query;

    if (!name && !email && !phone) {
      return res.status(400).json({
        message: "At least one search parameter is required",
      });
    }
    let query = {};
    if (Adminname) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    const Admin = await adminService.SearchAdmin(query);

    if (Admin.length === 0) {
      return res.status(404).json({ message: "No matching records found" });
    }

    res.status(200).json({
      success: true,
      message: "Admin Data searching successfully!",
      data: admin,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// search using http://localhost:3001/v1/admin/AdminList?page=1

const pagination = async (req, res) => {
  try {
    const page = req.query.page;
    const size = 5;
    const pages = parseInt(page);

    const Index = (pages - 1) * size;

    if (page < 1) {
      return res
        .status(400)
        .json({ message: "Page number must be greater than or equal to 1" });
    }

    const item = await adminService.pagination(Index, size);
    res.status(200).json({
      success: true,
      message: "Admin Data Pagination successfully!",
      data: item,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAdmin,
  addAdmin,

  updateAdmin,
  deleteAdmin,
  loginAdmin,
  SearchAdmin,
  pagination,
};
