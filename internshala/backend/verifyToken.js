const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next) =>{

    const authHeader = req.headers.token;
    if(authHeader)
    {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "secret", (err,user) =>{
            if(err)
            {
                return res.status(401).json("Invalid token");
            }
            req.user = user;
            next();
        })
    }
    else
    {
        return res.status(404).json("You are not Authorized !!");
    }

}

const verifyTokenAndAuthorization = (req,res,next) =>{

    verifyToken(req, res, () =>{
        if(req.user.id === req.params.id || req.user.isAdmin)
        {
            next();
        }
        else
        {
            return res.status(401).json("You are not allowed!!");
        }
    })
}

const verifyTokenAndAdmin = (req,res,next) =>{

    verifyToken(req,res,()=>{
        if(res.user.isAdmin)
        {
            next();
        }
        else{
            return res.status(401).json("Not Allowed !!");
        }
    })
}

module.exports = {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization};