const express = require("express");
const router = express.Router();

const { loginUser, signUpUser } = require("../controllers/userControllers");

router.post("/login", loginUser);
router.post("/signup", signUpUser);

module.exports = router;
