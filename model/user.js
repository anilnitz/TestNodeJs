const db=require('../dbConnection');
var a=async()=>{
    await db.connect(async function(err){
        if(err) throw err;
        console.log('connected!');
        await db.query('SELECT * FROM USER', function (err, result, fields){
            if (err) throw err;
            console.log(result);
            return result;
        });
    });

}

module.exports=a();