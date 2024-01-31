var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var c = '';
    var reader1 = fs.createReadStream('./textfile.txt', 'utf8'); 
    // Specify encoding as 'utf8' when creating the ReadStream.

    // Handle errors with the 'error' event
    reader1.on('error', function(err) { 
        // Change 'err' to 'error' and use 'on' directly for error handling
        console.log(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    });

    // Listen for the 'data' event to read the file content
    reader1.on('data', function(chunk) {
        c += chunk;
    });

    // Listen for the 'end' event to send the response when the file reading is complete
    reader1.on('end', function() {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
         // Use 'writeHead' to set the status code
        res.write(c);
        res.end();
    });

}).listen(8083);
// http://localhost:8083/