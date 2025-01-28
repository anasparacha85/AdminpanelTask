const mongoose=require('mongoose');
const productschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true

    }
    
})

const product=new mongoose.model('Product',productschema);
module.exports=product;