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
    sql1 = 'INSERT INTO empinfo values(1,"Aditya","Main","Ratnagiri",50000)';
    con.query(sql1,function(err,result){
        if(err) {throw(err);}
        console.log('data is inserted...');
    })
})