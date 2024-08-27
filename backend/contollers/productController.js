 const productModel=require("../models/productModel")
 
 
 exports.getProducts=async(req,res, next)=>{

    const query = req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
     }}:{}

const product=await productModel.find(query)
const productLength=product.length
res.json({
    success:true,
    product,
    productLength
    
})

}

exports.getSingleProduct=async(req,res, next)=>{
    try{
        const singleProduct=await productModel.findById(req.params.id)
        res.json({
            success:true,
            message:"get single Products Is Working",
            singleProduct
    
        })
    }catch(error){
        res.status(404).json({
            success: false,
            message: 'Unable to get Product with that ID'
        })
    }
    
    
}

