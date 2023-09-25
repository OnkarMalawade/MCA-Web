var http = require('http');
var pt = require('./ptrdemo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Value: " + pt.ptrCal(10000, 4 , 8));
  res.end();
}).listen(8083);