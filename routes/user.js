const express = require("express");
const router = express.Router();

const {
  loginUser,
  signUpUser,
  getOneUser,
} = require("../controllers/userControllers");

router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.get("/:id", getOneUser);

module.exports = router;
