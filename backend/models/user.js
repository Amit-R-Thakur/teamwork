const mongoose =  require("mongoose")
const validator =  require("validator")
const userSchema = mongoose.Schema({
    name:{
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
              throw new Error("Invalid Email Address");
            }
          }
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});


const User = new mongoose.model("USER",userSchema);
module.exports= User;