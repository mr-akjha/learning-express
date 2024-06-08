const path = require('path');

exports.basePath = () => path.join(__dirname);

exports.viewsPath = (file) => path.join(__dirname,'../view/',file);


