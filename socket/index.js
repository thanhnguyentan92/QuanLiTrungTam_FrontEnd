
var fs=require("fs");
var express=require("express");
var mysql=require("mysql");
var app=express();
var path=require("path");

var api= require('./routes/api');
var index=require("./routes/index");
//View Engine
app.use(express.static("public"));
app.set('views', './views'); // general config
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');
var server=require("http").Server(app);

// get Route
app.get("/",function(req,res){
 res.render("trangchu.html");
});
var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'customerInfor'
	

});
connection.connect(function(err){
	if(err) throw err;
	console.log("connected");
});
// INSERT INTO customer (id,name,password) VALUES('','ken','123')

app.get("/",function(req,res){
	
	
	connection.query("INSERT INTO customer (id,name,password) VALUES('','ken','123')"

		,function(err,result){
		if(err) throw err;
		console.log("succesful");
	});
});
app.use("/",index);
app.use("/api",api);
app.listen(3000);
