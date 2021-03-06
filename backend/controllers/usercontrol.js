const User = require("../models/user");
require("../database/connect");
const bcrypt = require("bcrypt");
const validator=require("validator")
exports.signup= async (req,res)=>{
    
    const { name,email,password} = req.body
     if(!email||!name||!password){
         return res.status(402).send("please fill all the details")
     }
    try{
        const users = new User ({fullname:name,email,password})
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
        else if(splitedMsg.indexOf("email:")!=-1){
            res.status(404).send("invalid email!")

        }
        else{
            res.status(404).send("something went wrong")
        }
    }
}
exports.login = async (req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(404).send("please enter all the details!");
    }
    if(!validator.isEmail(email)){
      return  res.status(404).send("invalid Email")
    }
    else
    {

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
        else
        {
            res.status(404).send("User Not Found!");
        }
        
        
    }catch(err){
        res.status(404).send("invalid details!");
    }
} }

exports.getUser=async(req,res)=>{
    try{
        const _id=req
        const user=await User.findById(_id)
        res.send(user)

    }
    catch(err){
        console.log(err)
    }

}
