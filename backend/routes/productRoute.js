const express=require('express');
const { getAllProducts, createProduct,data } = require('../controllers/productController');

const router=express.Router();

router.route('/products').get(getAllProducts)
// router.route('/products/data').post(data)
router.route('/products/new').post(createProduct)

module.exports=router       