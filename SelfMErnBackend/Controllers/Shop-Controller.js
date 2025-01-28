const product=require('../Models/Product-Model')
const shopall=async(req,res)=>{
    try {
        const products=await product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({msg:'no data in the shop'})
        
    }
}
const getshopbyid=async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await product.findOne({_id:id});
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({msg:'cant send shopbyid'})
        
    }
}
const filterby1to20=async(req,res)=>{
    try{
        const dta=await product.find({price:{$gte:1,$lte:20}})
        res.status(200).json(dta)
    }
    catch(error){
        res.status(400).json({msg:'filter nhi horhe 1 se 20'})
    }
}
const filterby21to40=async(req,res)=>{
    try{
        const dta=await product.find({price:{$gte:20,$lte:40}})
        console.log('i m data of filter',dta);
        
        res.status(200).json(dta)
    }
    catch(error){
        res.status(400).json({msg:'filter nhi horhe 20 se 40'})
    }
}
const filterby40to60=async(req,res)=>{
    try{
        const dta=await product.find({price:{$gte:40,$lte:60}})
        res.status(200).json(dta)
    }
    catch(error){
        res.status(400).json({msg:'filter nhi horhe40 se 60'})
    }
}
module.exports={shopall,getshopbyid,filterby1to20,filterby21to40,filterby40to60};