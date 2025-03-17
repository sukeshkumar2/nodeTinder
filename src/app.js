const express = require("express");

const app = express();


const connectDB = require("./config/database");

connectDB().then(()=>{
    console.log("Database connection successful");

    app.listen(7777,()=>{

        console.log("server is running on port 7777......");
    });
}).catch(()=>{
    console.log("cannot connect to Database");
});



