var mysql = require('mysql');

var con= mysql.createConnection({

    host:"localhost",
    user: "root",
    password: "123456",
    database: "mydb"
});

con.connect(function(err){
            if(err) throw err;
           var sql = "drop table if exists try";  //if table doesn't exists then change will appear on waringCount  
        con.query(sql,function(err,result){

            if(err) throw err;
            console.log(result);
            console.log("droped !");


        });
});