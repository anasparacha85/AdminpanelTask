const {parseAsync}=require('zod')
const validate=(schema)=>async(req,res,next)=>{

    try{
        const parsebody=await schema.parseAsync(req.body)
        req.body=parsebody;
        next()

    }
    catch(err){
        console.log(err.errors[0].message);
        const status=422;
        const message='fill the input properly';
        const extradetails=err.errors[0].message;
        const error={
            status,message,extradetails
        }
        //res.status(status).json({message,extradetails})
        next(error)
        
    }
}

module.exports=validate