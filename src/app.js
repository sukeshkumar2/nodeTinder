const express = require("express");

const {adminAuthorization,userAuthorization}=require("./middleware/auth");

const app = express();

app.use("/admin",adminAuthorization);

app.get("/admin/getData",(req,res,next)=>{

    console.log("getting data from admin DB");
    res.send("all admin data");
});
app.get("/admin/deleteData",(req,res,next)=>{

    console.log("data deleted from admin DB");
    res.send(" admin data deleted");
})
app.get("/user/login",(req,res,next)=>{

    console.log("checking user credentials");
    res.send("user login successful");
})
app.use("/user",userAuthorization);
app.get("/user/getData",(req,res,next)=>{

    console.log("getting data from user DB");
    res.send("all user data");
});
app.get("/user/deleteData",(req,res,next)=>{

    console.log("data deleted from user DB");
    res.send(" user data deleted");
})


// app.get("/user/:userId/:name/:pass",(req,res)=>{

//     console.log(req.params);
//     res.send("params");
    
//     });

    // app.get("/user",(req,res,next)=>{

    //     console.log("RH1");
    //     next();
        
    //     },(req,res,next)=>{

    //         console.log("RH2");
    //         next();
            
    //         },(req,res,next)=>{

    //             console.log("RH3");
    //             res.send("finally rh3");
                
    //             });
    // //hello 45

    // const rH1 = (req,res,next)=>{
    //     console.log("rh1");
    //     next();
    // }
    // const rH2 = (req,res,next)=>{
    //     console.log("rh2");
    //     next();
    // }
    // const rH3 = (req,res,next)=>{
    //     console.log("rh3");
    //     next();
    // }
    // const rH4 = (req,res,next)=>{
    //     console.log("rh4");
    //    res.send("finally rh4");
    // }

    // app.get("/test",[rH1,rH2],rH3,rH4);



//this will only handle GET call to /user
// app.get("/user",(req,res)=>{
// res.send({firstName: "Sukesh",lastName:"Kumar"});

// });

// app.get("/ab*cd",(req,res)=>{
//     res.send("ab*cd pattern");
    
//     });

//     //a(bc)?d   => bc is optional
//     //ab+cd  => one or more b's

// app.post("/user",(req,res)=>{
//     res.send("Data successfully saved");
    
//     });
    
// app.delete("/user",(req,res)=>{
//         res.send("Deleted successfully");
        
//         });

//         app.patch("/user",(req,res)=>{

//             res.send("patched  successfully")

//         });
//         app.put("/user",(req,res)=>{

//             res.send("put  successfully")

//         });



app.listen(7777,()=>{

    console.log("server is running on port 7777......");
});