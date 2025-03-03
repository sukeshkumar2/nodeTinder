const express = require("express");

const app = express();


app.use("/test",(req,res)=>{
    res.send("Hello from test");
});

//this will only handle GET call to /user
app.get("/user",(req,res)=>{
res.send({firstName: "Sukesh",lastName:"Kumar"});

});

app.post("/user",(req,res)=>{
    res.send("Data successfully saved");
    
    });
    
app.delete("/user",(req,res)=>{
        res.send("Deleted successfully");
        
        });

        app.patch("/user",(req,res)=>{

            res.send("patched  successfully")

        });
        app.put("/user",(req,res)=>{

            res.send("put  successfully")

        });



app.listen(7777,()=>{

    console.log("server is running on port 7777......");
});