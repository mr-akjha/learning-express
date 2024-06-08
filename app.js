/** Importing the express Js  */
const express = require('express');

/** Creating express application */
const app = express();

/**Importing body-parser to parse the request in json object by simply adding a middleware to parse request body*/
const bodyParser = require('body-parser');

/**Configuring the body-parser with express middleware and extended true to parse nested objects */
app.use(bodyParser.urlencoded({extended:true}));

/** Importing the web routes from web.js file */
const webRoutes = require("./routes/web");

/**
 * Using path module to work with paths
 */
const path = require('path');

/**
 * Added access to public folder to load static files
 */
app.use(express.static(path.join(__dirname,'public')));

/**  Registering the  main route to display hello world */
app.get('/',(req,res,next) => {
    console.log('Request received');
    res.status(200).send("<h1> Hello world ! </h1>")
});

/** Registering the Web routes with the prefix as web */
app.use('/web',webRoutes);


/** Middleware to handle unregistered routes  */
app.use((req,res,next) => {
    res.status(404).send(`<h2 style="text-align: center; color: #f70933;">404 Page Not Found</h2>`)
});


/** Configure the port for this application now app will run on http://localhost:3000 */
app.listen(3000);