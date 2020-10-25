import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router = express.Router()

/*
    adding asyncHandler package to handle async failures 
    instead of having to try-catch blocks everywhere
*/


/*  @desc fetch all products
    @route GET /api/products
    @access public
 */
router.get("/", asyncHandler ( async (req, res) => {
    // gets all products
    const products = await Product.find({});

    res.json(products);
}))

/* @desc fetch a single product
   @route GET /api/products/:id
   @access public
 */
router.get("/:id", asyncHandler (async (req, res) => {
    const product = await Product.findById(req.params.id)
    // if we have a product with this id
    if (product) {
        res.json(product);
    } else {
        res.status(404)
        console.lo("status now" + res.status())
        throw new Error("Product not Found")
    }
}))



export default router;
