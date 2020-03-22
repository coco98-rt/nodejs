var mysql = require('mysql');

var con= mysql.createConnection({

    host:"localhost",
    user: "root",
    password: "123456",
    database: "mydb"
});

con.connect(function(err){
            if(err) throw err;
            var na ="26";
           var sql = "delete from family where age ="+ mysql.escape(na);
        con.query(sql,function(err,result){

            if(err) throw err;
            console.log(result);
            console.log(result.affectedRows);


        });
});