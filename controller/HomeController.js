const userModel=require('../model/user');

module.exports.show=async(req,res)=>{
   console.log('hello');
   console.log(userModel);
   res.send(userModel)
}

module.exports.show1=async(req,res)=>{
    res.send('hello1')
}