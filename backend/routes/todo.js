const express = require("express");
const { createtodo, gettodobyid, updatetodo, deletetodo,getTodoByUserId,updateTodoStatus } = require("../controllers/todocontrol");
const router = express.Router();
const {usermiddleware}=require("../middleware/auth");


router.post("/createtodo",usermiddleware,createtodo)
router.get("/todo/get/user",usermiddleware,getTodoByUserId)
router.patch("/todo/update/status/:id",usermiddleware,updateTodoStatus)
router.get("/gettodo/:id",usermiddleware,gettodobyid)
router.patch("/todo/update/:id",usermiddleware,updatetodo)
router.delete("/todo/delete/:id",usermiddleware,deletetodo)
module.exports=router;