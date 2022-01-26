const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.usermiddleware= async (req,res,next)=>{
 
  try{  
    const token = req.headers.authorization
    const validuser = await jwt.verify(token,process.env.secret_key);
    if(!validuser){
        res.send("invalid user");
    }
    req._id=validuser._id                     
    next();
  }
  catch(err){
      console.log(err); 
      res.send("not a valid user");
  }
}
// 61f1bd9e70489f2fff260931