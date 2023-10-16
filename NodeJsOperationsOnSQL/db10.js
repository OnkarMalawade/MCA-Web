var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'employee1'
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT users.fname AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });