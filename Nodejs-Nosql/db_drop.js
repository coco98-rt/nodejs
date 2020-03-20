var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){

    if(err)throw err;
    var dbo =db.db("mydb");
    dbo.collection("server").drop(function(err,delOK){ //we can also can use dropCollection() method instead of collection().drop()

        if(err) throw err;
        if(delOK) console.log("collection deleted");
        db.close();
    });
});