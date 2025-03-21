const express = require("express");

const app = express();

const User = require("./models/user");

app.use(express.json());
app.post("/signup",async (req,res)=>{
const userObj = {
    firstName : "sujith",
    lastName : "kumar",
    email: "dosapatisujith@gmail.com",
    password:"Sujith@123",
    gender:"Male",
    age:25
}
const user = new User(userObj);
await user.save();

res.send(userObj.firstName+" added succesfully...");
});

const connectDB = require("./config/database");

connectDB().then(()=>{
    console.log("Database connection successful ...");

    app.listen(7777,()=>{

        console.log("server is running on port 7777......");
    });
}).catch(()=>{
    console.log("cannot connect to Database");
});



