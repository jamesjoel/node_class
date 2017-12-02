var express=require('express');
var app=express();

var bodyParser=require('body-parser');
var MongoClient=require('mongodb').MongoClient;


app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname+'/public'));

app.listen(3000, function(){
	console.log("Server Running");
});

app.get('/', function(req, res){
	res.render('home');
});

app.get('/student', function(req, res){
	var data={ name : "james", age : 25, city : "indore" };

	res.render('student', data);
});
