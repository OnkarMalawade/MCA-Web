var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'employee1'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM empinfo ORDER BY fname", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
