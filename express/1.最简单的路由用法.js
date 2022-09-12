//但不推荐使用
const express = require('express');
const app = express();

//挂载路由
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.post('/',(req,res)=>{
    res.send('Post Request')
})

//启动web服务器
app.listen(8081,()=>{
    console.log('server running at http://127.0.0.1:8081');
})