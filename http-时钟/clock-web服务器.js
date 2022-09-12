//1、导入http模块
const http = require('http');
//2、导入fs模块
const fs = require('fs');
//3、导入path模块
const path = require('path');

//2.1 创建web服务器
const server = http.createServer();
//2.1 监听web服务器的request事件
server.on('request',(req,res)=>{
    //3.1 获取到客户请求的URL地址
  //     /clock/index.html
  //     /clock/index.css
  //     /clock/index.js
  const url = req.url;
//   console.log(url); 这里的url是指 / 
    //3.2把请求的URL地址映射成具体文件的存放路径
    // const fpath = path.join(__dirname,url); 
// 5.1 预定义一个空白的文件存放路径
  let fpath = ''
  if (url === '/') {
    fpath = path.join(__dirname, './clock/index.html')
  } else {
    //     /index.html
    //     /index.css
    //     /index.js
    fpath = path.join(__dirname, '/clock', url)
  }


//4.1 根据“映射”过来的文件路径读取固定的“错误信息”
fs.readFile(fpath,'utf8',(err,dataStr)=>{
    //4.2读取失败，向客户端响应固定的“错误信息”
    if(err) return res.end('404 Not found');
    //4.3读取成功，将读取成功的内容，响应给客户端
    res.end(dataStr)
    })
})

// 2.3 启动服务端
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080');
})