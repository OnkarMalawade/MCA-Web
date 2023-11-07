var express = require('express');
var mysql = require('mysql');
var db=require('./database');
var session = require('express-session');//session
var flash = require ('express-flash');//flash

var app = express();

var bodyParser = require('body-parser');
//const { stringify } = require('querystring');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
   secret: '123456cart',
   resave: false,
   saveUninitialized: true,
   cookie:{ maxAge: 60000}
}))



app.get('/', function(req, res){
    res.sendFile(__dirname+'/login.html');
  });

app.post('/auth',function(req,res){
   let email = req.body.email;
   let fname = req.body.fname;
   if(email && fname){
      db.query('Select * from infoTB where fname = ? and email = ?',[fname,email],function(error,results){
         if(error) throw error;
         if(results.length > 0){
            req.session.loggedin = true;
            req.session.fname=fname;
            res.redirect('/register');
         }else{
            res.send('Incorrect UserEmail or Username');
         }
         res.end();
      });
   }else{
      res.send('Please enter UserEmail and Password');
      res.end();
   }
});
app.get('/register',function(req,res){
   if (req.session.loggedin) {
      res.sendFile(__dirname+'/new.html');
   } else {
      res.send('Please Login to view the Page');
   }
});
app.post('/formSubmit', function(req, res){
  if(req.session.loggedin){
   //res.send(JSON.stringify("Hello "+req.body.name+" "+req.body.surname));
   var f_name = req.body.fname;
   var l_name = req.body.lname;
   var email = req.body.email;
   var tel = req.body.tel;
   var dob = req.body.dob;

   var sql = `INSERT INTO  infoTB(fname,lname,email,tel,dob)VALUES("${f_name}","${l_name}","${email}","${tel}","${dob}")`;
   db.query(sql,function(err,result){
      if (err) throw err;
      console.log("record inserted");
      req.flash('success','Data added succefully');
      
   });
   }else{
      res.send('Please send login view');
   }
    res.redirect('/register');
    res.end();
    });
app.post('/logout',function(req,res){
   req.session.destroy((err) =>{
      res.redirect('/');
   })
});
app.post('/reg',function(req,res){
   req.session.destroy((err) =>{
      res.redirect('/register');
   })
});
app.post('/loged',function(req,res){
   req.session.destroy((err) =>{
      res.redirect('/');
   })
});
app.listen(5003,()=>{
   console.log("Server is running")
});