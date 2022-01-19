const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    content:{
        type:String
    }
},{
    timestamps:true
})
const todos =  mongoose.model("TODOS",todoSchema);

module.exports=todos;