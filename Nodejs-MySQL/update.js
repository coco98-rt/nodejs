var mysql = require('mysql');

var con= mysql.createConnection({

    host:"localhost",
    user: "root",
    password: "123456",
    database: "mydb"
});

con.connect(function(err){
            if(err) throw err;
           var sql = "update family set name ='Aai' where name='Koushalya'";  
        con.query(sql,function(err,result){

            if(err) throw err;
            console.log(result);
            console.log("record updated !!");


        });
});