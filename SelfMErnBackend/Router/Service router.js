const express=require('express');
const service=require('../Controllers/service-Controller')
const router=express.Router();
router.route('/service').get(service)
module.exports=router