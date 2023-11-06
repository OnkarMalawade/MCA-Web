var express = require('express');
var mysql = require('mysql');

var app = express();

var bodyParser = require('body-parser');
const { stringify } = require('querystring');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function(req, res){
    res.sendFile(__dirname+'/register.html');
  });

app.post('/formsubmit', function(req, res){
   res.send(JSON.stringify("Hello "+req.body.name+" "+req.body.surname));
    
    });

app.listen(5003,()=>{
   console.log("Server is running")
})