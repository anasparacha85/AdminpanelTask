const express=require('express');
const router=express.Router();
const userMiddleware=require('../Middleware/userMiddleware');
const adminmiddleware=require('../Middleware/Admin-Middleware')
const Admincontroller=require('../Controllers/Admin-controller')
router.route('/user').get(userMiddleware,adminmiddleware,Admincontroller.users);
router.route('/user/:id').get(userMiddleware,adminmiddleware,Admincontroller.getuserbyid)
router.route('/user/update/:id').patch(userMiddleware,adminmiddleware,Admincontroller.updateuserbyid)
router.route('/user/delete/:id').delete(userMiddleware,adminmiddleware,Admincontroller.deleteusersbyid);
module.exports=router
