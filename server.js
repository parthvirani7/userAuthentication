require("dotenv").config();
const express =  require("express")
const app = express()
const http = require("http");
const route = require("./routes")
const {connectdb} = require("./db/connectdb")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1",route);

app.set("view engin","ejs")


app.get("/add", (req, res) => {
    res.render("./register.ejs");
  });
  app.get("/login", (req, res) => {
    res.render("./login.ejs");
  });

  app.get("/addmanager", (req, res) => {
    res.render("./managerReg.ejs");
  });
  app.get("/managerdata", (req, res) => {
    res.render("./managerdata.ejs");
  });

// database connection
connectdb();



http.createServer(app).listen(process.env.PORT,()=>{
console.log("server started on port " + process.env.PORT);
})

