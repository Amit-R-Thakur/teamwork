const express = require("express");
const { createtodo, gettodobyid, updatetodo, deletetodo } = require("../controllers/todocontrol");
const router = express.Router();

router.post("/createtodo",createtodo)
router.get("/gettodo/:id",gettodobyid)
router.put("/update/:id",updatetodo)
router.delete("/delete/:id",deletetodo)
module.exports=router;