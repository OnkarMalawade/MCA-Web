var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'employeee',
})

con.connect(function(err){
    if (err) {throw (err);}
    console.log('connected');
    sql1='INSERT INTO emp_info(id, fname, lname, salary) VALUES (1,"rahul","khedekar",200000)';
    con.query(sql1,function(err){
        if(err) {throw(err);}
        console.log('inserted');
    })
})