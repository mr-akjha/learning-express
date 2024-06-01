/** Importing the express Js  */
const express = require('express');

/** we have imported the express to access the Routes functionality of express js */

/** Created a constant of router object of express */
const routes = express.Router();

/** Get Route to load the simple HTML Page with the form */
routes.get('/',(req,res,next) => {
    res.status(200).send(`<h2 style="text-align: center; color: #4CAF50;">Simple Form</h2>
    <form action=/web/store method=POST style="max-width: 300px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
        <label for="name" style="display: block; margin-bottom: 10px; font-weight: bold;">Name:</label>
        <input type="text" id="name" name="name" style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;">

        <label for="age" style="display: block; margin-bottom: 10px; font-weight: bold;">Age:</label>
        <input type="number" id="age" name="age" style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;">

        <input type="submit" value="Submit" style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
    </form>`);
});

/** Post route to console log the input from the above form */

routes.post('/store',(req,res,next) => {
    console.log(req.body); 
    res.status(200).send(`<h2 style="text-align: center; color: #4CAF50;">From Submitted</h2>`);
    res.end();
});

module.exports = routes;