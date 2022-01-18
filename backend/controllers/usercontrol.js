const User = require("../models/user");
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
            console.log(newusers);
        }
        else{
            res.send("something went wrong");
        }
    } catch(err){
        console.log(err);
        const splitedMsg=err.message.split(" ");
        if(splitedMsg[11]=="email:"){
            res.status(404).send("Email is already registered")
        }
        else{
            res.status(404).send("something went wrong")
        }
    }
}