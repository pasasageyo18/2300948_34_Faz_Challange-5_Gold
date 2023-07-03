//import all module
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//add user variable with email and password
const user = { email: "admin", password: "admin" };

//body parser for content type
app.use(bodyParser.urlencoded({ extended: true }));

//read public folder
app.use(express.static("public"));

//read json type
app.use(express.json());

//render html with view engine ejs
app.set("view engine", "ejs");

//set router for index.ejs
app.get("/", function (req, res) {
  //render page
  res.render("index");
});

//set router for trial.ejs
app.get("/trial", function (req, res) {
  //render page
  res.render("trial");
});

//set router for trial.ejs
app.get("/login", function (req, res) {
  //render page
  res.render("login");
});

//for the login post method after submit the email and password
app.post("/login", (req, res) => {
  //take the email and password input from the page body and turn to variable
  let username = req.body.email;
  let password = req.body.password;

  //if else condition to check wether the email and password is right or false
  if (username === user.email && password === user.password) {
    //if the email and password right it will redirect to greet page
    res.redirect("/greet");

    //if one of them are wrong the express will send a text respond to body page
  } else {
    res.send("email atau password salah.");
  }
});

//set router for greet.ejs
app.get("/greet", (req, res) => {
  //render the page and bring the name variable that contain email user
  const name = user.email;
  res.render("greet", { name });
});

//set the server for debugging at localhost:5000
app.listen(5000, function () {
  console.log("Server running on port 5000");
});
