// 这是包的入口文件

const data = require('./src/dataFormat');
const escape = require('./src/htmlEscape');

//向外暴露需要的成员
module.exports = {
    //...代表把data和escape中所有的属性展开。
    ...data,
    ...escape
}