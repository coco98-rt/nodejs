var mc = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";

mc.connect(url,function(err,db){ //created connection to db using url

    if(err) throw err;
    var dbo =db.db('mydb'); 

    dbo.collection('order').aggregate([

        {
            $lookup :{
                    from: 'products',
                    localField: 'product_id',
                    foreignField : '_id',
                    as : 'new thing added using lookup'
            }
        }
    ]).toArray(function(err,res){
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });


}); 