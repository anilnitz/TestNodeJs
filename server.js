const express = require('express');
const app=express();
const userRoutes=require('./route/web');

app.use('/',userRoutes)

app.listen(4000,()=>{
    console.log('Server started at 4000');
});

console.log('Hello World!');