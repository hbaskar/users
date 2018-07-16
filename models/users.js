var db=require('../dbconnection');
var bcrypt = require('bcrypt');
var saltRounds = 10;

var User={
getAllUsers:function(callback){
return db.query("Select * from app_users",callback);
},
getUserById:function(id,callback){
    return db.query("select * from app_users where user_id=?",[id],callback);
},
addUser:function(user,callback){
   console.log("inside service");
   console.log(user);
   bcrypt.hash(user.password, saltRounds, function(err, hash) {
    user.password = hash;
    console.log(hash);

return db.query("Insert into app_users(user_name, first_name, last_name, email, password) values(?,?,?,?,?)",
[user.user_name, user.first_name, user.last_name, user.email, user.password],callback);
}); 
},
deleteUser:function(id,callback){
    return db.query("delete from app_users  where user_id=?",[id],callback);
},
updateUser:function(id,user,callback){
    return  db.query("update app_users set first_name=?,last_name=? where user_id=?",[user.first_name, user.last_name,id],callback);
},
};
module.exports=User;
