const mongoose =  require("mongoose")
const validator =  require("validator")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate: (value) => {
            if (!validator.isEmail(value)) {
              throw new Error("Invalid Email Address!");
            }
          }
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

userSchema.pre("save",async function(next){
    console.log("hash")
    this.password = await bcrypt.hash(this.password,12);
    next();
})

userSchema.methods.genToken=async function(){
    const token = await jwt.sign({_id:this._id},process.env.secret_key);
    return token

} 

const User = new mongoose.model("USER",userSchema);
module.exports= User;