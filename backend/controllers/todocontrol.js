const express = require("express");
const todo = require("../models/todos");
require("../database/connect");

exports.createtodo = async (req,res)=>{

    const{content} = req.body
    if(!content){
        return res.send("please do enter a todo");
    }
    try{
    
        const newtodo = new todo({content}); 
        const todos = await newtodo.save()

        if(todos){
            res.send({todos})
        }
        else{
            res.send("todos was not created");
        }

    }catch(err){
        console.log(err);
    }
}


exports.gettodobyid= async (req,res)=>{
    const findtodo = await todo.findById({_id:req.params.id});

    if(findtodo){
        res.send(findtodo);
    }else{
        res.send("something went wrong");
    }
}

exports.updatetodo = async (req,res)=>{
    const data = await todo.findByIdAndUpdate({_id:req.param.id},{$set:{content:req.body.content}});
    
    if(data){
        res.send(data)
    }
    else{
        res.send("something went wrong");
    }
}


exports.deletetodo = async (req,res)=>{
    const deletetodo = await todo.findOneAndDelete({_id:req.params.id});

    if(deletetodo){
        res.send(deletetodo)
    }else{
        res.send("something went wrong");
    }
}

