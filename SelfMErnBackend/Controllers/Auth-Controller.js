const register=require('../Models/Register-Model')
const nodemailer=require('nodemailer')
const jwt = require("jsonwebtoken");
const bcrypt=require('bcryptjs')

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const checkuser=await register.findOne({email})
        if(!checkuser){
            return res.status(401).json({msg:'User Not Exists'})

        }
        const passwordcompare=await checkuser.comparepassword(password)
        if(passwordcompare){
        res.status(200).json({msg:'Login Successfull',token:await checkuser.generateToken(),data:checkuser})
       // console.log('login',checkuser);
        }
        else{
            res.status(400).json({msg:'Invalid username or Pasword'})

        }
        
        
    } catch (error) {
        console.log('login error',error);
        
        
    }

}
const signup=async(req,res)=>{
    try{
        const {name,email,password,confirmPassword}=req.body;
        const userpresent=await register.findOne({email});
        if(userpresent){
          return  res.status(401).json({msg:'User Already Exists'})
        }
        if(password!=confirmPassword){
            return res.status(401).json({msg:'pasword not matched ...please confrim password'})
        }
        const data=await register.create({name,email,password,confirmPassword});
        console.log('token',data.generateToken());
        
        
res.status(200).json({msg:'Registration Successfull',token:await data.generateToken()});
        
    }
    catch(error){
        console.log('register errro',error);
        
    }
}
const user=async(req,res)=>{
    try {
        const userdata=req.user;
        // console.log(userdata);
        res.status(200).json(userdata)
        
    } catch (error) {
console.log('userauthennfs  error',error);

        
    }
}

const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use Gmail service
    auth: {
        user: 'amiranas761@gmail.com', // Replace with your Gmail address
        pass: 'qjuuuxffwofxyzdd',   // Replace with the App Password you just generated
    },
});



const sendoptp = async (req, res) => {
    try {
        const optp = Math.floor(10000 + Math.random() * 90000); // Generate OTP
        console.log('Generated OTP:', optp);

        const { email } = req.body;
        const user = await register.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Generate a temporary token valid for OTP verification
        const token = jwt.sign({ id: user._id, email: user.email,otp:optp }, "TEMP_SECRET", { expiresIn: "15m" });

        // Send email
        const info = await transporter.sendMail({
            from: '"NodeMailer" <amiranas761@gmail.com>', // Sender info
            to: email,                                    // Recipient email
            subject: 'Password Reset Code',
            text: `Your OTP is: ${optp}`,
            html: `<p>Hi ${user.name},</p><p>Your OTP for password reset is: <strong>${optp}</strong></p>`,
        });

        console.log('Email sent:', info.messageId);

        if (info.messageId) {
            // Save OTP in the database
            await register.updateOne({ email }, { $set: { optp } });

            // Send response with token
            res.status(200).json({
                message: 'Password reset email sent',
                token, // Include token in response
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error occurred', error });
    }
};

// const verifyotp=async(req,res)=>{
//     try {
      

//         const { otp } = req.body;
//         // const token=req.header('Authorization');
//         console.log(typeof(otp));
//         const ottp=parseInt(otp)
//         console.log(typeof(ottp));
        
        
//         // if(!token){
//         //    return res.status(401).json({msg:'Authorization token for passsword change is required'})
//         // }
//         // const verifytoken=jwt.verify(token,'TEMP_SECRET');
//         // console.log(verifytoken.email);
        
//         const decodedtoken=req.token;
        
//         const user = await register.findOne({email:decodedtoken.email, optp: ottp });
//         console.log(user);
        

    
//         if (!user) {
//           return res.status(404).json({ msg: "Invalid OTP" });
//         }
    
//         // OTP matched, generate temporary token
//         // const token = jwt.sign({ id: user._id }, "TEMP_SECRET", { expiresIn: "15m" }); // Token valid for 15 minutes
    
//         res.status(200).json({ msg: "OTP matched" })}
//          catch (error) {
//         res.status(400).json({msg:'otp not matched',error})
        
//     }

// }
const verifyotp = async (req, res) => {
    try {
        const { otp } = req.body;
        const decodedtoken = req.token;

        // Validate OTP
        const user = await register.findOne({ email: decodedtoken.email, optp: parseInt(otp) });
        if (!user) {
            return res.status(404).json({ msg: "Invalid OTP" });
        }

        // Clear OTP after successful verification
        await register.updateOne({ email: decodedtoken.email }, { $unset: { optp: "" } });

        res.status(200).json({ msg: "OTP matched" });
    } catch (error) {
        res.status(500).json({ msg: "Error verifying OTP", error });
    }
};

// const updatepassword=async(req,res)=>{
//     try {
//        const {password}= req.body;
//        console.log(password);
       
//        const decodedtoken=req.token;
//        console.log(decodedtoken);
//        const hashedPassword = await bcrypt.hash(password, 10);
//         console.log("Hashed Password:", hashedPassword);
//        const updatepassworddata=await register.updateOne({optp:decodedtoken.otp},{$set:{password:hashedPassword}})
//        if(!updatepassworddata){
//         return res.status(401).json({msg:'Go back please write the 5 digit code  first'})
//        }
//        res.status(200).json({msg:'passsword has been changed'})
       
//     } catch (error) {
//         if (error.name === "JsonWebTokenError") {
//             return res.status(401).json({ msg: "Invalid token" });
//         }  if (error.name === "TokenExpiredError") {
//             return res.status(401).json({ msg: "Token has expired" });
//         }

//         res.status(500).json({ msg: "Error updating password", error });
//         console.log('errro updating password',error);
        
//     }

// }
// const updatepassword = async (req, res) => {
//     try {
//         const { password } = req.body;
//         const decodedtoken = req.token;

//         // Check OTP and email
//         const user = await register.findOne({ email: decodedtoken.email, optp: decodedtoken.otp });
//         if (!user) {
//             return res.status(401).json({ msg: "Invalid OTP or Email" });
//         }

//         // Hash the new password
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await register.updateOne({ email: decodedtoken.email }, { $set: { password: hashedPassword } });

//         // Clear OTP after successful update
//         await register.updateOne({ email: decodedtoken.email }, { $unset: { optp: "" } });

//         res.status(200).json({ msg: "Password has been updated successfully" });
//     } catch (error) {
//         res.status(500).json({ msg: "Error updating password", error });
//     }
// };
const updatepassword = async (req, res) => {
    try {
        const { password } = req.body;
        const decodedtoken = req.token;

        // Ensure OTP is cleared before updating password
        const user = await register.findOne({ email: decodedtoken.email });
        if (!user || user.optp) {
            return res.status(401).json({ msg: "OTP verification required before resetting password" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update password
        await register.updateOne({ email: decodedtoken.email }, { $set: { password: hashedPassword } });

        res.status(200).json({ msg: "Password has been updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error updating password", error });
    }
};


module.exports={login,signup,user,sendoptp,verifyotp,updatepassword}