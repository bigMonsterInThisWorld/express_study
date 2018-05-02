var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let connection = mysql.createConnection({  //创建数据库连接
    host : 'localhost',
    user : 'root',
    password : 'peng1247769659lv'
});
connection.connect(); //连接数据库


/* GET home page. */
router.use('/', function(req, res, next) {

    console.log(req.body);
    connection.query('SELECT * FROM my_demo_basedata.website_table WHERE name = "淘宝"',function (err,rows,fields) {
        if(err){
            throw err;
        }
        console.log(rows);
        connection.end();
        res.send(rows);
    });
});
module.exports = router;