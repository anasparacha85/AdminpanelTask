const express=require('express');
const shop=require('../Controllers/Shop-Controller')
const router=express.Router();
router.route('/shop').get(shop.shopall)
router.route('/shop/:id').get(shop.getshopbyid)
router.route('/shop/filterbtw1to20').get(shop.filterby1to20)
router.route('/shop/filterbtw20to40').get(shop.filterby21to40)
router.route('/shop/filterbtw40to60').get(shop.filterby40to60)
module.exports=router