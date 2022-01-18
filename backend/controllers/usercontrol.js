const User = require("../models/user");
require("../database/connect");

exports.signup= async (req,res)=>{
    
    const { name,email,password } = req.body
     if(!email||!name||!password){
         return res.send("please fill all the details")
     }
    try{
        const users = new User ({name,email,password})
        const token = await users.genToken();
        const newusers= await users.save()
        if(newusers){
            res.status(200).send({user:newusers,token});
            console.log(newusers);
        }
        else{
            res.send("something went wrong");
        }
    } catch(err){
        console.log(err);
    }


}