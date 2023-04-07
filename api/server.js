const express = require('express');
const bodyParser = require('body-parser');
const router = require("./index")
const app = express();

// set up your routes and middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', router);
  
 
  
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
