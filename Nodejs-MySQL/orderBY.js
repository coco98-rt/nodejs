var mysql = require('mysql');

var con= mysql.createConnection({

    host:"localhost",
    user: "root",
    password: "123456",
    database: "mydb"
});

con.connect(function(err){
            if(err) throw err;
           var sql = "SELECT age FROM family ORDER BY name"; //by default it will order by ascending for descending use desc keyword
        con.query(sql,function(err,result){

            if(err) throw err;
            console.log(result);


        });
});