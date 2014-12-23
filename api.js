/**
 * Created by garry.gibson on 19/12/14.
 */

var http = require('http');
var router = require('./router');
var responder = require('./responder');
var mysql = require('mysql');

var connection = mysql.createConnection({
    port:'8889',
    database:'articles',
    user:'root',
    password:'root'
});



router.get(/\/articles/, function(req, res, info) {
   // res.end('Getting all the articles'); return;
    connection.query('SELECT  * from article limit 5', function(err, rows,fields) {
        if(!err) {
            responder(res).code(200).json(rows);
        } else {
            responder(res).code(200).json([]);
        }
    });

   // connection.end();
});

router.get(/\/article\/(.+)?/, function(req, res, info) {
    // res.end('Getting all the articles'); return;
    var ID = info.match[1];
console.log(ID);
    connection.query('SELECT  * from article where id =?',[ID], function(err, rows,fields) {
        if(!err) {
            responder(res).code(200).json(rows);
        } else {
            console.log(err.code);
            responder(res).code(200).json([]);
        }
    });
   // connection.end();
});


http.createServer(router.process).listen('9000', '127.0.0.1');
console.log('API listening');





