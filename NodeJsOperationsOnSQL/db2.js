var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
})

con.connect(function(err){
    if (err) {throw (err);}
    console.log('connected');
    sql1='CREATE DATABASE emp_stud';
    con.query(sql1,function(err){
        if(err) {throw(err);}
        console.log('CREATED DATABASE');
    })
})