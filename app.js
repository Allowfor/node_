var mysql =require('mysql2');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1509",
    database:"aus"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("create database aus",function(err,result){
        if(err)throw err;
        console.log("Database Created");
    })
})