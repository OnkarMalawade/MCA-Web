var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'studentdata'
})
con.connect(function(err){
    if(err) {throw(err);}
    console.log('connected');
    sql1 = 'select * from studentinfo';
    con.query(sql1,function(err,result){
        if(err) {throw(err);}
        console.log(result);
    })
})