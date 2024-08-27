const express=require("express")
const router=express.Router()
const {getProducts, getSingleProduct}=require('../contollers/productController')



router.route('/products').get(getProducts)

router.route('/products/:id').get(getSingleProduct)


module.exports=router