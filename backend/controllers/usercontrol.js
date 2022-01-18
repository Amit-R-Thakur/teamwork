const User = require("../models/user");
require("../database/connect");
const bcrypt = require("bcrypt");
exports.signup= async (req,res)=>{
    
    const { name,email,password} = req.body
     if(!email||!name||!password){
         return res.status(402).send("please fill all the details")
     }
    try{
        const users = new User ({name,email,password})
        const token = await users.genToken();
        const newusers= await users.save()
        if(newusers){
            res.status(200).send({user:newusers,token});
        }
        else{
            res.send("something went wrong");
        }
    } catch(err){
        const splitedMsg=err.message.split(" ");
        if(splitedMsg[11]=="email:"){
            res.status(404).send("Email is already registered")
        }
        else{
            res.status(404).send("something went wrong")
        }
    }
}
exports.login = async (req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.send("please enter all the details");
    }

    try{
        const login = await User.findOne({email:email});
        if(login){
            const compassword = await bcrypt.compare(password,login.password);

            const token= await login.genToken();
          
              if(compassword){
                //   res.status(200).send({logined_user:login},token);
                  res.status(200).send({user:login,token});
              }
              else{
                  res.status(404).send("invalid details!");
              }
            
        }
        
    }catch(err){
        res.status(404).send("invalid details!");
    }

    }
