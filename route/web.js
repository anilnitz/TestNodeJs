const express=require('express');
const  userRoutes=express.Router();
const HomeController=require('../controller/HomeController');
require('../model/user');

userRoutes.get('/show',HomeController.show);
userRoutes.get('/show1',HomeController.show1);
//userRoutes.get('/show1',userController.show1);


module.exports=userRoutes;