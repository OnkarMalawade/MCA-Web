var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    passwort:'',
    database:'student3'
})

con.connect(function(err){
    if (err) {throw (err);}
    console.log('connected');
    sql1='select * from stud_info';
    con.query(sql1,function(err,result){
        if(err) {throw(err);}
        console.log(result);
    })
})