var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'employee1'
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM empinfo LIMIT 5 OFFSET 2";
  var sql = "SELECT * FROM empinfo LIMIT 5";
  //var sql = "SELECT * FROM empinfo LIMIT 5 OFFSET 2";
  //var sql = "SELECT * FROM customers LIMIT 2, 5"; //same as offset
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
