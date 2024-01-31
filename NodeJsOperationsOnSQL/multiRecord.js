// Import the MySQL module
var mysql = require('mysql');

// Establish a connection to the MySQL server, specifying the database 'empDB1'
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

    // Prepare the SQL query to insert multiple records into the 'empinfo' table
    var sql = 'INSERT INTO empinfo (id, fname, lname, address, salary) VALUES ?';

    // Define the array of records to be inserted
    var records = [
        [1, 'John', 'Doe', '123 Main Street', 50000],
        [2, 'Jane', 'Smith', '456 Elm Street', 60000],
        [3, 'Peter', 'Jones', '789 Oak Street', 70000]
    ];

    // Execute the SQL query using the connection object and the array of records
    con.query(sql, [records], function(err, result) {
        if (err) {
            // Handle any errors that occur during query execution
            throw err;
        }

        console.log('Number of records inserted:', result.affectedRows);
    });
});
