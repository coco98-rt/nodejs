var mc = require('mongodb').MongoClient;
var url ="mongodb://127.0.0.1:27017"; // 27017 is default port no. for mongodb instances 
//we also can write localhost instead of 127.0.0.1
mc.connect(url,function(err,db){
    
    if(err) throw err;
    var dbo =db.db("mydb");
    //var q={ addr: "parbhani" } //addr must be same as in database
    var q={ addr: /^M/ };   //regular expresion starting with M
    dbo.collection("cust").find(q,/*{
        projection:{
            name:1,
            _id: 0
    }*/).toArray(function(err,res){

        if(err) throw err;
        console.log(res);
        db.close();
    });
});