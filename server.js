const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // create app


app.listen(8080, function(){ // Set app to listen for requests on port 3000
    console.log('Listening on port 8080!'); // Output message to indicate server is listening
});