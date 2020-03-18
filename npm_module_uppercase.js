var h = require('http');
var n = require('upper-case');


h.createServer(function(req,res){


res.write(n.upperCase("Hey there"));
res.end();


}).listen(8081);