const adminAuthorization = (req,res,next)=>{
    
    console.log("authorizing  admin credentials");

    var token ="xyz";

    var authorized = token ==="xyz";

    if(authorized)
    {
        next();
    }
    else
    {
        res.status(401).send("You are not authorized to access admin data.");
    }
}
const userAuthorization = (req,res,next)=>{

    console.log("authorizing  user credentials");

    var token ="xyz";

    var authorized = token ==="xyz";

    if(authorized)
    {
        next();
    }
    else
    {
        res.status(401).send("You are not authorized to access user data.");
    }
}

module.exports = {
    adminAuthorization,
    userAuthorization
}