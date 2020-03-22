var mysql =require('mysql');


var con = mysql.createConnection({ // establishing connection using mysql lib of nodejs

    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydb"

});
//var sql ="ALTER TABLE family ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
var sql ="alter table orderr add order_id_two int auto_increment primary key ";
con.connect(function(err){
    if(err) throw err;
        console.log("connected");
    con.query(sql,function(err,res){
        if(err) throw err;
        console.log("table created !!")
        
    });
});