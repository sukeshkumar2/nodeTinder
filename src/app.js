const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello from server");
});

app.use("/hello",(req,res)=>{
    res.send("Hello Hello hello");
});

app.use("/sukesh",(req,res)=>{
    res.send("Hello Sukesh"); 
});
app.use("/sujith",(req,res)=>{
    res.send("Hello Sujith 1");
});

app.listen(7777,()=>{

    console.log("server is running on port 7777......");
});