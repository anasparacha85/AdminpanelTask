const express=require('express');
const router=express.Router();
const {signupvalidate,loginvalidate}=require('../validator/Auth-validator')
const otpmiddleware=require('../Middleware/otpmiddleware')
const validate=require('../Middleware/Validator-middleware')
const usermiddleware=require('../Middleware/userMiddleware')
const {login,signup,user,sendoptp,verifyotp,updatepassword}=require('../Controllers/Auth-Controller')
router.route('/').post(validate(loginvalidate),login)
router.route('/register').post(validate(signupvalidate),signup)
router.route('/user').get(usermiddleware,user)
router.route('/forgetpassword').post(sendoptp)
router.route('/VerifyOTP').post(otpmiddleware,verifyotp)
router.route('/updatepassword').patch(otpmiddleware,updatepassword)
module.exports=router