const Product=require('../models/productModel')

// exports.data=async (req,res)=>{
//     console.log(req.body)
// }

//Create Product
exports.createProduct=async (req,res,next)=>{
    console.log(req.body)
    const product=await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

exports.getAllProducts=(req,res)=>{
    res.status(200).json({message:"Route iis working fine"});
}