const express = require("express");
const { signup, login,getUser } = require("../controllers/usercontrol");
const {usermiddleware} =require("../middleware/auth")
const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/get/user",usermiddleware,getUser)

module.exports=router;