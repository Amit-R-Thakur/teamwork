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
    req._id=validuser._id               //this _id is used in the next step (the token is matched with req._id and then used in next work)      
    next();
  }
  catch(err){
      console.log(err); 
      res.send("not a valid user");
  }
}
