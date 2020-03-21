var mc = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";

mc.connect(url,function(err,db){

    if(err) throw err;
    var dbo = db.db("mydb");/*
    dbo.collection("cust").findOne({},function(err,result){  // using findOne we can find first occurrence in selection 

        if(err) throw err;
        console.log(result.name);
        db.close();
    });*/
    dbo.collection("products").find({},  //if find method with no parameter like find() this. will give us select * in mysql 
       /* { projection:{        //first parameter in find() method is query, second parameter is projection where we can specify which key (IN key : value pair) will displayed i.e projected in result. if key is set to 0 will not be displayed and if 1 then display. we can't assign 0 and 1 at same time to diff key expect _id and other key.
                    name: 1,
                    addr: 1,
                    _id: 0
            }

        }*/).toArray(function(err,result){

        if(err) throw err;
        console.log(result);
     //   console.log(result[3].addr); //it will display 3rd addr from database
        db.close();
    });
});