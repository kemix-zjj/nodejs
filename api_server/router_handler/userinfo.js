//导入数据库操作模块
const db = require('../db/index');


//获取用户基本信息的处理函数
exports.getUserInfo = (req,res)=>{
   //定义查询用户信息的sql语句
   const sql = `select id,username,emails,user_pic from ev_users where id=?`;
   //调用db.query()执行SQL语句  身份认证成功下，req中就会挂载user这个属性
   db.query(sql,req.user.id,(err,results)=>{
    //执行sql语句失败
    if(err) return res.cc(err);
    //执行sql语句成功，但查询到的结果可能会空
    if(results,length !== 1) return res.cc('获取用户信息失败！');
    //用户信息获取成功
    res.send({
        status:0,
        message:'获取用户信息成功！',
        data:results[0],
    })

   })
}