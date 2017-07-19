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


app.get("/getImg",function(req,res){
    var querySql = 'SELECT * FROM goods WHERE ID=4';

    link.query(querySql, function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        res.send(JSON.stringify(result))
        console.log(3333)
    });

});



// app.use(router);