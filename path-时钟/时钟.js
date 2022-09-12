//1.1 导入fs模块
const fs = require('fs');

//1.2 导入path模块
const path = require('path');

//1.3 定义正则表达式，分别匹配<style></style>和<script></script>
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//2.1 调用fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname,'../素材/index.html'),'utf-8',function(err,dataStr){
    // 2.2读取HTML文件失败
    if(err) return console.log('读取HTML文件失败！' + err.message);
    // 2.3读取文件成功后，调用对应三个方法，分别拆解出 css js html 文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
});

//3.1 定义处理 css 样式的方法
function resolveCSS (dataStr){
    //3.2 使用正则提取需要的内容  exec:检索正则表达式的匹配，若匹配到则返回一个数组。所需的是arr[0]
    const r1 = regStyle.exec(dataStr);
    // console.log(r1);
    //3.3 将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','');
    //3.4 调用fs.writeFile()方法，将提取的样式，写入到clock目录中index.css的文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err) return console.log('写入CSS 样式失败！' + err.message);
        console.log('写入CSS文件成功！');
    })
}

//4.1 定义处理 js 脚本的方法
function resolveJS (dataStr){
    //4.2 使用正则提取需要的内容  exec:检索正则表达式的匹配，若匹配到则返回一个数组。所需的是arr[0]
    const r2 = regScript.exec(dataStr);
    // console.log(r1);
    //4.3 将提取出来的样式字符串，进行字符串的replace替换操作
    const newJS = r2[0].replace('<script>','').replace('</script>','');
    //4.4 调用fs.writeFile()方法，将提取的样式，写入到clock目录中index.js的文件里面
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err) return console.log('写入JavaScript脚本失败！' + err.message);
        console.log('写入JS脚本成功！');
    })
}

//5.1 定义处理 html 结构的方法
function resolveHTML (dataStr){
    //5.2 将字符串调用replace方法，把内嵌的style 和 script 标签，替换成外联的link和script标签
    const newHTML = dataStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>').replace(regScript,'<script src="./index.js"></script>');
    //5.3 写入index.html这个文件
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err) return console.log('写入HTML文件失败！' + err.message);
        console.log('写入HTML页面成功！');
    })
}