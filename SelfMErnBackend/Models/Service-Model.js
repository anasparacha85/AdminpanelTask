const mongoose=require('mongoose');
const serviceschema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String,
    },
    icon:{
        type:String
    }
})
const service=new mongoose.model('Service',serviceschema)
module.exports=service