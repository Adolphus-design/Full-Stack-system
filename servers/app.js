const mysql = require('mysql');
const express = require('express');
//const app = express();
const cors = require('cors');
const con= require('./conn');
 //const bodyParser = require('body-parser');
 bodyParser = require('body-parser')

 const app = express()
  .use(cors())
  .use(bodyParser.json());

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  next();    
});

  //define routes
  app.use('/', require('./user'));
  

  

  const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 7000;
const server = app.listen(port, function () {
                          console.log('Server listening on port ' + port);
                        });
