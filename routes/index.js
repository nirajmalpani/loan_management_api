const express = require("express");
const router = express.Router();
const passport = require("passport");

console.log("router loaded");

router.get("/", (req, res, next) => {
  res.send("Welcome to main route!");
});

router.use("/user", require("./user"));

module.exports = router;
