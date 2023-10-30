const express = require('express');
var app = express();

var bodyparser = require('body-parser');

app.use(bodyparser.json());;
app.use(bodyparser.urlencoded({extended:true}));

app.get('/register',function (req, res) {
    res.sendFile(__dirname+'/register.html');    
});

app.post('/formSubmit',function(req,res){
    res.send("Your Name is <b>"+req.body.name+"</b> and Your city is <b>"+req.body.city+"</b>");
});

app.listen(7091);
