const express = require("express")
const route =  express.Router();
const {adminController} = require("../controllers")
const validation =  require("../middlewares/validate");
const { adminValidation } = require("../validation");
const { upload } = require("../middlewares/multer");

route.post("/add", adminController.addAdmin);
route.post("/login", adminController.loginAdmin);

route.get("/get",adminController.getAdmin);
route.post("/update/:id",adminController.updateAdmin);
route.post("/delete/:id",adminController.deleteAdmin);
route.get("/search" , adminController.SearchAdmin)
route.get("/adminList" ,adminController.pagination)


module.exports = route