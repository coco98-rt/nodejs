var fs = require('fs');
var h =require('http');


h.createServer(function(req,res){

fs.readFile('demofile.html', function(err,data){

	res.write(data);
	res.end();



});
fs.appendFile('filethrough_nodejs.txt','learning nodejs ohhh yay !',function(err){

	if(err) throw err;
	console.log('saved ! ');
});



}).listen(8081);