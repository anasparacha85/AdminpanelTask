const errormiddleware=(err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || 'error is input from middleware';
    const extradetails=err.extradetails || 'another extradetails error '
   return  res.status(status).json({message,extradetails})
}
module.exports=errormiddleware