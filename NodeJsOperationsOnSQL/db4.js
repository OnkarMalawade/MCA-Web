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
    sql1 = 'DROP TABLE empinfo';
    //sql1 = 'select * from empinfo';
    con.query(sql1,function(err,result){
        if(err) {throw(err);}
        console.log('Table deleted successfully...');
    })
})