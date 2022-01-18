const express=require("express")
const app=express()
const port=process.env.PORT||6000
require("./database/connect")
app.get("/",(req,re)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("app is running on port "+port)
})