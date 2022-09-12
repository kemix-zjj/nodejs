//1、导入fs模块
const fs = require('fs');

//2、调用fs.readFile()读取文件的内容
fs.readFile('../素材/成绩.txt','utf-8',function(err,dataStr){
    //3、判断是否读取成功
    if(err){
        return console.log('读取文件失败！'+ err.message);
    }
    // console.log('读取文件成功！' + dataStr);

//4.1 先把成绩的数据，按照空格进行分割
const arrOld = dataStr.split(' ');
//4.2 循环分割后的数组，对每一项数据，进行字符串的替换操作
const arrNew = [];
arrOld.forEach(item => {
    arrNew.push(item.replace('=',':'));
})
//4.3 把新数组中的每一项，进行合并 join('\r\n') ，得到一个新的字符串  \r\n代表换行
const newStr = arrNew.join('\r\n');

//5、调用fs.writeFile()方法，把处理完毕的成绩，写入到新的文件中
fs.writeFile('./成绩-ok.txt',newStr,function(err){
    if(err) {
        return console.log('写入文件失败！' + err.message);
    }
    console.log('成绩写入成功！');
})
})