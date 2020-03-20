var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
    var dbo = db.db("mydb"); 
    var query = { addr: /^M/ };
    dbo.collection('cust').deleteMany(query,function(err,obj){

            if(err) throw err;
            console.log(obj.result.n); //it will return how many document is deleted i.e instances
            console.log("starting with M addrs deleted");
            db.close();
    })    


});