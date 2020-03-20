var mc = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";

mc.connect(url,function(err,db){ //created connection to db using url

    if(err) throw err;
    var dbo =db.db('mydb');  // name of database
    var myobj ={
        name :"Coca cola",
        addr : "Mumbai"
    };
    var myobj1 ={    //creating obj to be inserted into database
        name :"mirenda",
        addr:"nanded"
    }
    dbo.collection("cust").insertOne(myobj1,function(err,res){ //passing myobj into cust name collection

            if(err) throw err;
            console.log("sec objected inserted");
            db.close();
    });
   /* dbo.collection("cust").insertMany({myobj,myobj1}/*not working/,function(err,res){ //passing myobj into cust name collection

        if(err) throw err;
        console.log("sec objected inserted");
        db.close();
});*/
    
});