var http=require('http');
var myUTFw=require('./userFileWrite');
var myUTFr=require('./userFileRead');
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write(myUTFw.udfWrite());
    res.write(myUTFr.udfRead());
    res.end();
}).listen(8084);