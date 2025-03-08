const userAuthorization = (req,res,next)=>{

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