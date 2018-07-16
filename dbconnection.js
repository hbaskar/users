var mysql=require('mysql');
var connection=mysql.createPool({
host:'localhost',
user:'appuser',
password:'appuser',
database:'test'
});
module.exports=connection;
