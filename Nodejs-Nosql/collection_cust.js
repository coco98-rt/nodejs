var mc = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";


mc.connect(url,function(err,db){

    if(err) throw err;
    var dbo =db.db("mydb"); //it's like table name in mysql(BUT NOT TABLE)
 /*   dbo.createCollection("cust",function(err,res){ // created collection of name 'cust'

        if(err) throw err;
        console.log("collection of cust created !!"); //display on terminal
        db.close();
    });*/
    dbo.createCollection("server",function(err,res){ // created collection of name 'cust'

        if(err) throw err;
        console.log("collection name 'server' created !!"); //display on terminal
        db.close();
    });
});