// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password:'',
//     database:'employee1'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM empinfo ORDER BY fname", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// Import the MySQL module
var mysql = require('mysql');

// Establish a connection to the MySQL server, specifying the database 'employee1'
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'empDB1'
});

// Connect to the MySQL server using the established connection object
con.connect(function (err) {
  if (err) throw err;

  // Define the SQL query to select all records from the 'empinfo' table and order them by 'fname'
  var sql1 = "SELECT * FROM empinfo ORDER BY fname";

  // Execute the SQL query using the connection object
  con.query(sql1, function (err, result) {
    if (err) throw err;

    console.log('Employee Data sorted by first name:');
    console.table(result);
  });
});

