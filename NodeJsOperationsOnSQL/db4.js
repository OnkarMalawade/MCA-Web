// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password:'',
//     database:'employee1'
// })
// con.connect(function(err){
//     if(err) {throw(err);}
//     console.log('connected');
//     sql1 = 'DROP TABLE empinfo';
//     //sql1 = 'select * from empinfo';
//     con.query(sql1,function(err,result){
//         if(err) {throw(err);}
//         console.log('Table deleted successfully...');
//     })
// })

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

  console.log('Connected to MySQL database');

  // Define the SQL query to drop the 'empinfo' table
  var sql1 = 'DROP TABLE empinfo';

  // Execute the SQL query using the connection object
  con.query(sql1, function (err, result) {
    if (err) throw err;

    console.log('Table empinfo deleted successfully...');
  });
});
