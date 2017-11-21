var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(require('./controllers/router'));
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname+'/public'));

app.listen(3000, function(){
	console.log('Server Running');
})