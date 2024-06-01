/** Importing the express Js  */
const express = require('express');

/** Creating express application */
const app = express();

/**Importing body-parser to parse the request in json object by simply adding a middleware to parse request body*/
const bodyParser = require('body-parser');

/**Configuring the body-parser with express middleware and extended true to parse nested objects */
app.use(bodyParser.urlencoded({extended:true}));


/**  Registering the  main route to display hello world */
app.get('/',(req,res,next) => {
    console.log('Request received');
    res.status(200).send("<h1> Hello world ! </h1>")
});

/** Configure the port for this application now app will run on http://localhost:3000 */
app.listen(3000);