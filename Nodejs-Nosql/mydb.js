var mc =require('mongodb').MongoClient; //we first have to install mongodb using npm and our laptop must have mongodb software
var url ="mongodb://127.0.0.1:27017/mydb";

mc.connect(url,function(err,db){

    if(err) throw err;
    console.log("Datebase created !");//print on terminal
    db.close();
});