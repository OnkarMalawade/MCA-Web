var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('This is first node program ');
  res.end('Hello World!');
}).listen(8082);