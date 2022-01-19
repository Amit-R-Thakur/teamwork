const dotenv = require("dotenv");
const express = require("express");
const cors=require("cors")
const app=express()
const port=process.env.PORT||6000
dotenv.config({path:"./config.env"});
require("./database/connect")


const ourapi=""
const User = require("./models/user");
const todo = require("./models/todos");

const userroutes = require("./routes/user");
app.use(cors())
const todoroutes = require("./routes/todo");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api",userroutes);
app.use("/api",todoroutes);

app.use(ourapi,userroutes);



app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("app is running on port "+port)
})