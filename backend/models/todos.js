const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        require:true,
        ref:"USER"
    },
    status:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
const todos =  mongoose.model("TODOS",todoSchema);

module.exports=todos;