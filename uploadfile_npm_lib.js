var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req,res){
        //to parse the uploaded file
    if(req.url=='/fileupload'){
        var form =new formidable.IncomingForm();
        form.parse(req, function(err,fields,files){//fields is important in function
            var oldpath =files.filetoupload.path;
            var newpath ='C:/Users/Rupali/Downloads/'+ files.filetoupload.name;
            fs.rename(oldpath,newpath,function(err){
                if(err) throw err;
                res.write('file is uploaded and moved !!');
                res.end();
            });
            
            
           //res.write('file upload !');
            //res.end();
        
    });
}   else{// form is created

res.writeHead(200,{'Content-Type':'text/html'});
res.write('<style>');
res.write(' div {background-color: lightblue;} .center { margin: auto;width: 50%;border: 3px solid green;padding: 10px;}');
res.write('</style>');
res.write('<div>');
res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
res.write('<input type="file" name="filetoupload"><br>');
res.write('<input type="submit">');
res.write('</form>');
res.write('</div>');
return res.end(); 
}

}).listen(8080);
