const AdminMiddleware=async(req,res,next)=>{
    try {
        const isAdmin=req.user.isAdmin;
        if(!isAdmin){
            return res.status(401).json('Access denied ..user is not an admim')
        }
        next()
    } catch (error) {
        next(error)
    }
  
}
module.exports=AdminMiddleware