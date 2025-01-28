 const jwt=require('jsonwebtoken')
// const otpmiddleware=async(req,res,next)=>{
//    
//    const token =req.header('Authorization');
//    if(!token){
//     return res.status(401).json({msg:'Authorization token for passsword change is required'})
//  }
//  try{
//     const verifytoken=jwt.verify(token,'TEMP_SECRET');
//     console.log(verifytoken.email);
//     req.token=verifytoken
//     next()
        
    
//  }
//  catch(error){
//     console.log('error in otp midle ware' ,error);
    
//  }
// }
// 
const otpmiddleware = async (req, res, next) => {
   const token = req.header('Authorization');
   if (!token) {
       return res.status(401).json({ msg: "Authorization token is required" });
   }
   try {
       const decoded = jwt.verify(token, "TEMP_SECRET");
       req.token = decoded;

       // Ensure OTP exists
      

       next();
   } catch (error) {
       return res.status(401).json({ msg: "Invalid or expired token", error });
   }
};

module.exports=otpmiddleware