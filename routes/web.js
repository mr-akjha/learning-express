/** Importing the express Js  */
const express = require('express');

/** we have imported the express to access the Routes functionality of express js */

/** Created a constant of router object of express */
const routes = express.Router();

const productController = require("../controller/ProductController");

/** 
 * Method GET
 * Path /web/add-product
 * Get Route to load the simple HTML Page with the form 
 * */
routes.get('/add-product',productController.addProduct);

/**
 * Method POST
 * Path /web/store-product
 * To store the Products in the Product file
 */
routes.post('/store-product',productController.storeProduct);

/**
 * Method GET
 * Path /web/product/:productId
 * To display the product after saving 
 */
routes.get('/product/:productId',productController.displayProduct);

module.exports = routes;