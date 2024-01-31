// Import the MySQL module
var mysql = require('mysql');

// Establish a connection to the MySQL server
var con = mysql.createConnection({
    // Specify the host address of the MySQL server
    host: 'localhost',
    // Provide the username for accessing the MySQL server
    user: 'root',
    // Enter the password for the specified user
    password: '',
});

// Connect to the MySQL server using the established connection object
con.connect(function(err) {
    if (err) {
        // Handle any errors that occur during connection
        throw err;
    }

    console.log('Connected to MySQL database');

    // Define the SQL query to create a new database named 'employee1'
    var sql1 = 'CREATE DATABASE empDB1';

    // Execute the SQL query using the connection object
    con.query(sql1, function(err, result) {
        if (err) {
            // Handle any errors that occur during query execution
            throw err;
        }
        console.log('Database created successfully');
    });
});
