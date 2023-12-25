import express from "express"
import "dotenv/config"
const app=express()

app.get('/youtube',(req,res)=>{
    console.log(req)
    res.send("<marquee>YouTube Naresh Kumar</marquee>")
})

app.listen(process.env.PORT,()=>{
    console.log("listing at port",process.env.PORT);
})