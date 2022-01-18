const dotenv = require("dotenv");
const express = require("express");
const app=express()
const port=process.env.PORT||6000
dotenv.config({path:"./config.env"});
require("./database/connect")


const User = require("./models/user");

const userroutes = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",userroutes);


app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("app is running on port "+port)
})