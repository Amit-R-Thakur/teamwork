const express = require("express");
const { createtodo, gettodobyid, updatetodo, deletetodo } = require("../controllers/todocontrol");
const router = express.Router();
const {usermiddleware}=require("../middleware/auth");


router.post("/createtodo",usermiddleware,createtodo)
router.get("/gettodo/:id",usermiddleware,gettodobyid)
router.put("/update/:id",usermiddleware,updatetodo)
router.delete("/delete/:id",usermiddleware,deletetodo)
module.exports=router;