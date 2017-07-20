/**
 * Created by lanouhn on 17/7/19.
 */
var devServer = require('./dev-server')
var app = devServer.app
var router = devServer.router

var mysql = require("mysql");

var link = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"friday"
});
//链接数据库
link.connect();


//查询语句
var all = 'SELECT * FROM goods';

var friday = 'SELECT * FROM goods WHERE activeDay>0 LIMIT 0,4';
var greens = 'SELECT * FROM goods WHERE firstType="田园蔬菜" LIMIT 0,4';
var meat = 'SELECT * FROM goods WHERE firstType="肉食家禽" LIMIT 0,4';
var fish = 'SELECT * FROM goods WHERE firstType="海鲜水产" LIMIT 0,4';
var goodFood = 'SELECT * FROM goods WHERE firstType="优选食材" LIMIT 0,4';
var wine = 'SELECT * FROM goods WHERE firstType="零食酒水" LIMIT 0,4';
var fastFood = 'SELECT * FROM goods WHERE firstType="蛋奶速食" LIMIT 0,4';
var global = 'SELECT * FROM goods WHERE firstType="全球代购" LIMIT 0,4';
var fruit = 'SELECT * FROM goods WHERE firstType="新鲜水果" LIMIT 0,4';

var arr = [friday,greens,meat,fish,goodFood,wine,fastFood,global,fruit];

//进入页面的展示数据的接口
router.get('',function (req,res) {
    var data =[];
    
    link.query(greens,function (err, result) {
        if (!err){
            data.push({title:'田园蔬菜',count: result});
        }
    });
    link.query(meat,function (err, result) {
        if (!err){
            data.push({title:'肉食家禽',count: result});
        }
    });
    link.query(fish,function (err, result) {
        if (!err){
            data.push({title:'海鲜水产',count: result});
        }
    });
    link.query(goodFood,function (err, result) {
        if (!err){
            data.push({title:'优选食材',count: result});
        }
    });
    link.query(wine,function (err, result) {
        if (!err){
            data.push({title:'零食酒水',count: result});
        }
    });
    link.query(fastFood,function (err, result) {
        if (!err){
            data.push({title:'蛋奶速食',count: result});
        }
    });
    link.query(fruit,function (err, result) {
        if (!err){
            data.push({title:'新鲜水果',count: result});
        }
    });
    link.query(global,function (err, result) {
        if (!err){
            data.push({title:'全球代购',count: result});
        }
    });
    link.query(friday,function (err, result) {
        if (!err){
	        	res.send({friday:result,type:data})
        }
    });
});

//首页点击 更多 的几口
router.get('/more',function (req,res) {
    link.query(all,function (err, result) {
        if (!err){
            res.send({all: result})
        }
    });
});


//详情页 展示
router.get('/detail',function (req,res) {
    var id = req.query.id;
    var querysql = 'SELECT * FROM goods WHERE id='+id;
    link.query(querysql,function (err,result) {
        if(!err){
            console.log(result);
        }
    })
});



app.use('/goods',router);