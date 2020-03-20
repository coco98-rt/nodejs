var mc =require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";

mc.connect(url,function(err,db){

    if(err) throw err;
    var dob =db.db('mydb');
    var sorted ={ name: 1};  //ascending order   // -1 for desending order
    dob.collection('cust').find().sort(sorted).toArray(function(err,res){

        if(err) throw err;
        console.log(res);
        db.close();
    })


})