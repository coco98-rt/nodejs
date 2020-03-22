var mysql = require('mysql');

var con =mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'mydb'
});

con.connect(function(err){
    
    if(err) throw err;
    var na ='kundlik';
   // var sql ="SELECT * FROM family limit 3 offset 2"; //it will start from 3rd row and end at 5th row  or limit 2,3
    
    var sql = "select * from product"
    //var sql ="select name,age from family where age > 25"
    //var sql ="select name from family where name like 'k%'"+ mysql.escape(na);  // all names which are starting with k will displayed
   // var sql ="select name from family where name = "+ mysql.escape(na);
    con.query(sql,function(err,res,fields){
                if(err) throw err;
                console.log(res);
               // console.log(fields);
    });
});