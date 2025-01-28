const Servicemodel=require('../Models/Service-Model')
const service=async(req,res)=>{
    try {
        const servicedata=await Servicemodel.find();
        if(servicedata){
            res.status(200).json(servicedata)
            }
            else{
                res.status(400).json({msg:'no collections in the service found'})
            }
    } catch (error) {
        console.log('srvice',error);
        
        res.status(500).json({msg:'error is service'})
        
    }
}
module.exports=service