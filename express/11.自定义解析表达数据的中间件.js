// 导入 express 模块
const express = require('express');
// 创建 express 的服务器实例
const app = express();

//导入Node.js内置的querystring模块
const qs = require('querystring');

//这是解析表单数据的中间件
app.use((req,res,next)=>{
    //定义中间件具体的业务逻辑
    // 1、定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str = '';
    // 2、监听req的data事件
    req.on('data',(chunk)=>{
        str += chunk; //数据过大时，是一部分一部分进行传输，因此这里需要进行拼接
    })
    // 3、监听req对象的end事件
    req.on('end',()=>{
        //在str中存放的是完整的请求体数据
        // console.log(str);
        //TODO:把字符串格式的请求体数据，解析成对象格式

        //调用qs.parse()方法，把查询字符串解析为对象
        const body = qs.parse(str);
        // console.log(body);
        //将解析出来的请求体对象，挂载为req.body属性
        req.body = body;
        //最后，一定要调用next()函数，执行后续的业务逻辑
        next();
        
    })
})


// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8080, function () {
    console.log('Express server running at http://127.0.0.1:8080')
  })
  

//写路由
app.post('/user',(req,res)=>{
    res.send(req.body);
})