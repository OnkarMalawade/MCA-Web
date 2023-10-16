var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'employee1'
})
con.connect(function(err){
    if(err) {throw(err);}
    console.log('connected');
    sql1 = 'CREATE TABLE empinfo(id int(10),fname varchar(20),lname varchar(20), address varchar(50), salary int(20))';
    con.query(sql1,function(err,result){
        if(err) {throw(err);}
        console.log('Table is Created');
    })
})