var express=require('express');
var app=express();
var bodyParser=require('body-parser');

// Creating Server
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded());


app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res){
	//res.send('hello world');
	var pageData={ title : 'Home Page'};
	res.render('index', pageData);
});

app.get('/login', function(req, res){
	res.send('This is login page');
})

app.post("/", function(req, res){
	console.log(req.body);
	res.redirect('/login');
});

app.listen(3000, function(){
	console.log("Server Running");
});

