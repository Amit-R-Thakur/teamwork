const dotenv = require("dotenv");
const express = require("express");
const cors=require("cors")
const app=express()
const port=process.env.PORT||6000
dotenv.config({path:"./config.env"});
require("./database/connect")
const ourapi="/todo-list/api"
const userroutes = require("./routes/user");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ourapi,userroutes);


app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("app is running on port "+port)
})