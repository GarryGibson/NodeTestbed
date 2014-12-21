/**
 * Created by garry.gibson on 18/12/14.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    port:'8889',
    database:'articles',
    user:'root',
    password:'root'
});

connection.query('SELECT  * from article limit 5', function(err, rows,fields) {
    // connected! (unless `err` is set)
    if (err) throw err;

    console.log('Title: ', rows[0].title);

    console.log(rows);
    //console.log(fields);

});

connection.end();

