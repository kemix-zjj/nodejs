const express = require('express');
const app = express();

//在这里，调用express.static()方法，快速对外提供静态资源
app.use(express.static('../http-时钟/clock'))
//挂载路径前缀
app.use('/public',express.static('../path-时钟/clock'))

app.listen(8080,()=>{
    console.log('express server running at http://127.0.0.1:8080');
})
