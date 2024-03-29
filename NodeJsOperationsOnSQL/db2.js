// Import the MySQL module
var mysql = require('mysql');

// Establish a connection to the MySQL server, specifying the database 'empDB1'
var con = mysql.createConnection({
    // Specify the host address of the MySQL server
    host: 'localhost',
    // Provide the username for accessing the MySQL server
    user: 'root',
    // Enter the password for the specified user
    password: '',
    // Specify the database to connect to
    database: 'empDB1'
});

// Connect to the MySQL server using the established connection object
con.connect(function(err) {
    if (err) {
        // Handle any errors that occur during connection
        throw err;
    }

    console.log('Connected to MySQL database');

    // Define the SQL query to create a new table named 'empinfo'
    var sql1 = 'CREATE TABLE empinfo(id int(10), fname varchar(20), lname varchar(20), address varchar(50), salary int(20))';

    // Execute the SQL query using the connection object
    con.query(sql1, function(err, result) {
        if (err) {
            // Handle any errors that occur during query execution
            throw err;
        }

        console.log('Table created successfully');
    });
});
