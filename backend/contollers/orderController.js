const orderModel=require("../models/orderModel")

exports.orderRoute=async(req,res, next)=>{
    try{
        const cartItems=req.body.cartItems
        const amount=Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
       
        
        const status="pending"
    
       const ramji= await orderModel.create({
            cartItems,amount,status
        })
  
        res.json({
            success:true,
            message:"post Route is working",
            ramji
        })
    }catch(error){
        res.json({message:"somthing went wrong"})
    }

   


}