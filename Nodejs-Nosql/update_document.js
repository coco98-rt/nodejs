//document is nothing but record in mysql
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { addr: "nanded" };
  var newvalue = { $set:{ addr: "palam"}};

  dbo.collection('cust').update(myquery,newvalue,function(err,res){  //using updateMany() method we can update all doc that meets criteria
        if(err)  throw err; 
        console.log("updated !!");
        console.log(res.result.nModified); //will return no. of update happen 
        db.close();

  });


});