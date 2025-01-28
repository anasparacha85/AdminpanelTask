const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    confirmPassword:{
        type:String,
        require:true

    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    optp:{
        type:Number,
        require:true
    }
})
registerSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    try{
        const saltround=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(this.password,saltround);
        this.password=hashpassword
    }
    catch(error){
        next(error)
    }
})
registerSchema.methods.generateToken=async function(){
    try{
    return jwt.sign({
        userId:this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin

    },'ANASISBESTDEVELOPER',{
        expiresIn:'30d'
    })
}catch(error){
    console.log(error);
    
}



}
registerSchema.methods.comparepassword=async function(password){
    try {
        return  bcrypt.compare(password,this.password)
    } catch (error) {
        console.error(error);
        
        
    }
}
const register=new mongoose.model('Usr',registerSchema);
module.exports=register;