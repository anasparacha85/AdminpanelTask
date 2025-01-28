const {z}=require('zod');
const loginvalidate=z.object({
    email:z.string({required_error:'Email is required'}).trim().email({message:'invalid email address'}).min(10,{message:'email should be atleast 10 characters '}).max(40,{message:'email sould not exceed 40 characters'}),
    password:z.string({required_error:'password is required'}).trim().min(7,{message:'password should be atleast 7 characters long '}).max(55,{message:'password should not exceed 55 characters'})
})

const signupvalidate=loginvalidate.extend({
    name:z.string({required_error:'name is required'}).trim().min(3,{message:'name should be atleast 3 characters long '}).max(155,{message:'name should not exceed 55 characters'}),
    confirmPassword:z.string({required_error:'password is required'}).trim().min(7,{message:'password should be atleast 7 characters long '}).max(55,{message:'password should not exceed 55 characters'})
})

module.exports={loginvalidate,signupvalidate}