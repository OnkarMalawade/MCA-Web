const express = require('express');
var app = express();

var bodyparser = require('body-parser');

app.use(bodyparser.json());;
app.use(bodyparser.urlencoded({extended:true}));

app.get('/register',function (req, res) {
    res.sendFile(__dirname+'/register.html');    
});

app.post('/formSubmit',function(req,res){
    res.send("Your Name is "+req.body.name+" and Your city is "+req.body.city);
});

app.listen(7091);