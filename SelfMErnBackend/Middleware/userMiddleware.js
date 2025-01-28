const jwt=require('jsonwebtoken')
const register=require('../Models/Register-Model')
const userMiddleware=async(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token){
        return res.status(403).json({msg:'unauthorized HTTP token not provided'})
    }
    try {
        const isverified=jwt.verify(token,'ANASISBESTDEVELOPER')
        console.log(isverified);
        const findeuser=await register.findOne({email:isverified.email}).select({password:0});
       // res.status(200).json(findeuser);
        req.user=findeuser;
        req.token=token;
        req.id=findeuser._id;
        next()
    } catch (error) {
        console.log('error is usermiddle ware',error);
        
        
    }
}
module.exports=userMiddleware