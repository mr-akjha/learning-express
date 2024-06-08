const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


const productsFile = path.join(__dirname,'../data','products.json');


const getProducts = callBack =>
{
    fs.readFile(productsFile, 'utf8',(error,fileContent) => {

        if (error || fileContent.length === 0) {
            console.log("error or empty called");
            return callBack([]);
        }
       

            return callBack(JSON.parse(fileContent))
    
    });
}

module.exports = class Product{
    constructor(product)
    {
        this.id = uuidv4();
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.quantity = product.quantity;
    };

    save(){
        getProducts(products => {
            products.push(this);
            fs.writeFile(productsFile,JSON.stringify(products),error => {
                console.log(error);
            });
        });
        return this.id;
    }

    static view(productId, callBack) {
        getProducts(products => {
            const product = products.find(product => product.id == productId);
            callBack(product);
        });
    }
}