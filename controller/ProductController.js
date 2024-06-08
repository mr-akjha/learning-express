const helpers = require("../util/helpers");

const Product = require("../model/Product");

exports.addProduct = (req,res,next) => {
    console.log("called",helpers.viewsPath('add-product.html'));
    res.status(200).sendFile(helpers.viewsPath('add-product.html'));
    // res.end();
};

exports.storeProduct = (req,res,next) => {

    const product = new Product(req.body);
    let productId = product.save();
    
    res.redirect(`/web/product/${productId}`);
};


exports.displayProduct = (req,res,next) => {
    const productId = req.params.productId;
    Product.view(productId,product => {
        res.json(product);
    });
};
