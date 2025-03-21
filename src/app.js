const express = require("express");

const app = express();

const User = require("./models/user");

app.use(express.json());
app.post("/signup",async (req,res)=>{

const user = new User(req.body);
await user.save();

res.send(user.firstName+" added succesfully...");
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



