var http = require('http');
var dt = require('./demo');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.write('This is first node program ');
  res.write('Date : '+ dt.mydate());
  res.end();
}).listen(8085);