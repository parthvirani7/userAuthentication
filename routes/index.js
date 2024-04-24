const express = require("express")
const route =  express.Router();
const adminRoute = require("./admin.route")
const managerRoute = require("./man.route")

route.use("/admin",adminRoute);
route.use("/manager",managerRoute);



module.exports = route;