const { verifyToken, createToken } = require("../middlewares/auth");
const { managerService } = require("../services");
const { findManager } = require("../services/man.service");
const path = require("path");
const fs = require("fs");
const manager = require("../models/man.model");

// ADD manager

// http://localhost:3001/v1/manager/add
const addManager = async (req, res) => {
  try {
    const body = req.body;

    console.log(body);
    const manager = await managerService.addManager(body);

    if (!manager) {
      throw new Error("Something went wrong");
    } else {
    }

    res.status(201).json({
      message: "manager Created success",
      data: manager,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET manager

// http://localhost:3001/v1/manager/get



const getManager = async (req, res) => {
  // const token = req.cookies["login_token"];

  // if (!token) {
  //   res.status(500).json({
  //     message: "you are not login",
  //   });
  // }

  const manager = await managerService.getManager();
  console.log(manager, "get manager");

  res.render("./managerdata.ejs",{message:manager})

  // res.status(200).json({
  //   message: "profile get success",
  //   data: manager,
  // });
};



// UPDATE manager

// http://localhost:3001/v1/manager/update/:<`id`>
const updateManager = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const manager = await managerService.updateManager(id, body);
    res.status(200).json({
      message: "manager updated success",
      data: manager,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// http://localhost:3001/v1/manager/delete/:<`id`>
// DELETE manager
const deleteManager = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const manager = await managerService.deleteManager(id);
    if (!manager) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "manager delete success",
      data: manager,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
// http://localhost:3001/v1/manager/search?name=<`name`>

const SearchManager = async (req, res) => {
  try {
    const { name, email, phone } = req.query;

    if (!name && !email && !phone) {
      return res.status(400).json({
        message: "At least one search parameter is required",
      });
    }
    let query = {};
    if (managername) {
      query.name = name;
    }
    if (email) {
      query.email = email;
    }
    const manager = await managerService.SearchManager(query);

    if (manager.length === 0) {
      return res.status(404).json({ message: "No matching records found" });
    }

    res.status(200).json({
      success: true,
      message: "manager Data searching successfully!",
      data: manager,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// search using http://localhost:3001/v1/manager/managerList?page=1

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

    const item = await managerService.pagination(Index, size);
    res.status(200).json({
      success: true,
      message: "manager Data Pagination successfully!",
      data: item,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getManager,
  addManager,

  updateManager,
  deleteManager,
  SearchManager,
  pagination,
};
