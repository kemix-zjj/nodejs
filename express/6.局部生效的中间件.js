//1、导入express模块
const express = require('express');
//2、创建express的服务器实例
const app = express();

//1、定义中间件函数
const mw1 = (req,res,next)=>{
    console.log('调用了局部生效的中间件');
    next();
}

//2、创建路由
app.get('/',mw1,(req,res)=>{
    res.send('Home page.');
});

app.get('/user',(req,res)=>{
    res.send('User page.');
});

//3、调用app.listen方法，指定端口号并启动web服务器
app.listen(8080,function(){
    console.log('Express server running at http://127.0.0.1:8080');
});