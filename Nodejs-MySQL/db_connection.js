/*var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "coco98",
  password: "123456"
});
  var sql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    con.query(sql,function(err,res){
      if(err) throw err;

      console.log("result: "+ res);

    });
 
  console.log("created !!");
  con.connect(function(err) {  
    if (err) throw err;  
    console.log("Connected!");  
   // var sql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";  
    con.query("CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))", function (err, result) {  
    if (err) throw err;  
    console.log("Table created");  
    });  
});

*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  sqll ="CREATE DATABASE try";   // try named database is created !
  con.query(sqll, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});