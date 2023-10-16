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
    sql1 = "UPDATE empinfo SET address = 'Devrukh' WHERE address = 'Ratnagiri'";
    con.query(sql1, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});