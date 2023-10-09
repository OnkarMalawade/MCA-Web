var http = require('http');
var dt = require('./demo2');

http.createServer(function (req, res) 
{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Date is : ')
  res.write(dt.mydate())
  res.end();
}).listen(8086);