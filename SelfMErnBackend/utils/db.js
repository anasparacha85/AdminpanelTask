const mongoose =require('mongoose')
// MONGODB_URI=mongodb+srv://amiranas761:eKmGsqBdGifD21JR@cluster0.edrnn.mongodb.net/AnotherMernProjectData?retryWrites=true&w=majority&appName=Cluster0
// const URI=process.env.MONGODB_URI
const URI='mongodb+srv://amiranas761:eKmGsqBdGifD21JR@cluster0.edrnn.mongodb.net/AnotherMernProjectData?retryWrites=true&w=majority&appName=Cluster0';
const connectdb=async()=>{
    try {
        await mongoose.connect(URI)
        console.log('database connected successfully');
        
    } catch (error) {
        console.error('Database connection failed',error);
        process.exit(0)
        
        
    }
}
module.exports=connectdb
