const express=require("express")
const { orderRoute } = require("../contollers/orderController")


const router=express.Router()

router.route('/order').post(orderRoute)

module.exports=router