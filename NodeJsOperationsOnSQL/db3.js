var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'emp_stud'
})

con.connect(function(err){
    if (err) {throw (err);}
    console.log('connected');
    sql1='CREATE TABLE emp(id int(10),fname varchar(20),lname varchar(20),salary int(7))';
    con.query(sql1,function(err){
        if(err) {throw(err);}
        console.log('CREATED TABLE');
    })
})