const register=require('../Models/Register-Model');

const users=async(req,res)=>{
    try {
        const data=await register.find();
        // console.log('admin uses',data);
        
        if(!data){
            return res.status(401).json({msg:'No Users Existss'})
        }
        res.status(200).json(data);
    } catch (error) {
      
        console.log('admin user',error);
        //next(error)
        
    }
}

const deleteusersbyid=async(req,res)=>{
    try {
        const params=req.params;
        console.log('params hn mai',params);
        
        const id=req.params.id;
        console.log('id hn mai',id);
        
        await register.deleteOne({_id:id})
        res.status(200).json({msg:'user deleted succesfully'})
    } catch (error) {
        console.log('delete user',error);
        res.status(400).json({msg:'user can not be deleted'})
        
    }
}
const getuserbyid=async(req,res)=>{
    try {
        const id=req.params.id;
       // console.log('user ki params se id',id);
        
        const data=await register.findOne({_id:id})
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({msg:'cant get user by id'})
    }
}
const updateuserbyid=async (req,res)=>{
    try {
        const updateddata=req.body;
      //  console.log(updateddata);
        
        const id=req.params.id;
        const updateuserdata=await register.updateOne({_id:id},{$set:{name:updateddata.name,email:updateddata.email,isAdmin:updateddata.isAdmin=='yes'?true:false}})
      //  console.log(updateuserdata);
        
        res.status(200).json({msg:'data updated successfully'})
    } catch (error) {
        res.status(400).json({msg:'user data cant be updated'})
        
    }
   

}
module.exports={users,deleteusersbyid,getuserbyid,updateuserbyid}