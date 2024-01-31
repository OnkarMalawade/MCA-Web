// Import the 'http' module to create an HTTP server.
var http = require('http');

// Create an HTTP server and specify a callback function to handle incoming requests.
http.createServer(function (req, res) {
  // Set the HTTP response status code to 200 (OK) and the content type to 'text/plain'.
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Write the text "This is the first Node program " to the response.
  res.write('This is first node program ');

  // Append "Hello World!" to the response and finalize the response.
  res.end('Hello World!');
}).listen(8082);  
// Listen on port 8082 for incoming HTTP requests.
// http://localhost:8082/
