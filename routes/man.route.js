const express = require("express")
const route =  express.Router();
const {managerController} = require("../controllers")
const validation =  require("../middlewares/validate");
const { managerValidation } = require("../validation/man.validate");
const { upload } = require("../middlewares/multer");

route.post("/add", managerController.addManager);

route.get("/get",managerController.getManager);
route.post("/update/:id",managerController.updateManager);
route.post("/delete/:id",managerController.deleteManager);
route.get("/search" , managerController.SearchManager)
route.get("/userList" ,managerController.pagination)


module.exports = route