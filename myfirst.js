var http = require('http');
var dt =require('./module_1');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("date and time:"+ dt.myDateTime());
  res.end('\n Hello World!');
}).listen(8080);

