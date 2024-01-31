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
//     sql1 = "UPDATE empinfo SET address = 'Talere' WHERE address = '123 Main Street'";
//     con.query(sql1, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
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
con.connect(function(err) {
    if (err) {
        // Handle any errors that occur during connection
        throw err;
    }

    console.log('Connected to MySQL database');

    // Define the SQL query to update the address of an employee
    var sql1 = "UPDATE empinfo SET address = 'Talere' WHERE address = '123 Main Street'";

    // Execute the SQL query using the connection object
    con.query(sql1, function (err, result) {
        if (err) {
            // Handle any errors that occur during query execution
            throw err;
        }

        console.log(result.affectedRows + " record(s) updated");
    });
});
