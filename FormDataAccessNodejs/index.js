const express = require('express');
var app = express();

app.get('/register',function (req, res) {
    res.sendFile(__dirname+'/register.html');    
});

app.get('/formSubmit',function(req,res){
    res.send("Your Name is "+req.query.name+" and Your city is "+req.query.city);
});

app.listen(7090);