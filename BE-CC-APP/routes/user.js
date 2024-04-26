const express = require("express");
const { signUp, signIn, forgotPwd } = require("../controllers/user.controller");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/forgot-pwd/:id", forgotPwd);

module.exports = router;
