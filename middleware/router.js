const express = require("express");
const router = express.Router();
const user = require("../account.json");

// Middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// Define the Homepage router
router.get("/greet", function (req, res) {
  const name = user.email;
  res.render("Greet", { name });
});

module.exports = router;
