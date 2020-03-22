var mysql =require('mysql');

var con = mysql.createConnection({

    host: 'localhost',
    user : 'root',
    password: '123456',
    database : 'mydb'
});

con.connect(function(err){

    if(err) throw err;
    console.log("connected !");
   // var sql = " insert into family (name, age, DOB ) values ('Rupali', '26', '23') "; //for single insersion
    //var sql ="select * from family"; 
    var sql = " insert into orderr (name, order_id, order_id_two) values ? ";
    var val = [  //to insert multiple rows at a time 
        
        ['zee','150','1'],
        ['zee','301','2'],
        ['star','780','3']



    ];
   con.query(sql,[val],function(err,res){
            if(err) throw err;
          //  console.log(" inserted !" );
          console.log(res);
          console.log(res.affectedRows);  //it will return no. of rows have been written at a time 
    });
});