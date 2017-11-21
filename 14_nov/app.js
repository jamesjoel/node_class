var express=require('express');
var app=express();
var mongo=require('mongodb');
var MongoClient=mongo.MongoClient;
var dbUrl="mongodb://localhost:27017/tss";
var bodyParser=require('body-parser');


app.use(bodyParser.urlencoded());
app.use(express.static(__dirname+'/public'));


app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res){
	MongoClient.connect(dbUrl, function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		//console.log('Connected', db);
		db.collection('user').find().toArray(function(err, doc){
			if(err){
				console.log('Data Error', err);
				return;
			}
			// console.log('Data---', doc);
			var pageData={ title : "Home Page", student : doc };
			res.render('home', pageData);
		});
	});
	// res.send('hello world');
})
app.get('/add', function(req, res){
	var pageData = { title : "Add New student"};
	res.render('add', pageData)
});

app.post('/add', function(req, res){
	MongoClient.connect(dbUrl, function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		// console.log(req.body);
		db.collection('user').insert(req.body, function(err, result){
			if(err){
				console.log('Error While Insert', err);
				return;
			}
			console.log('One Row Insert', result);
			res.redirect('/');
		});
	});


});
app.get('/delete/:id', function(req, res){
	console.log(req.params);
	var id=req.params.id;
	MongoClient.connect(dbUrl, function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		// console.log("created", new mongo.ObjectID(id));
		db.collection('user').remove({ _id : new mongo.ObjectID(id)}, function(err, result){
			if(err){
				console.log("Error while delete", err);
				return;
			}
			console.log("dete deleted", result);
			res.redirect('/');
		});
	})
});
<<<<<<< HEAD

app.get('/edit/:id', function(req, res){
	console.log(req.params);
	var id=req.params.id;
	MongoClient.connect(dbUrl, function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		// console.log("created", new mongo.ObjectID(id));
		db.collection('user').findOne({ _id : new mongo.ObjectID(id)}, function(err, doc){
			if(err){
				console.log("Error while selecting", err);
				return;
			}
			console.log("data selected", doc);
			// res.redirect('/');
			var pageData={ title : "Update", data : doc};
			res.render('edit', pageData);
		});
	})
});

app.post('/edit/:id', function(req, res){
	console.log(req.params);
	var id=req.params.id;
	MongoClient.connect(dbUrl, function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		// console.log("created", new mongo.ObjectID(id));
		db.collection('user').updateOne({ _id : new mongo.ObjectID(id)}, req.body, function(err, doc){
			if(err){
				console.log("Error while update", err);
				return;
			}
			console.log("data updated", doc);
			res.redirect('/');
			// var pageData={ title : "Update", data : doc};
			// res.render('edit', pageData);
		});
	})
});
=======
>>>>>>> be0ee1d3ae779b0b0a2dc5f67ba0c96b67a58d7d

app.get('/edit/:id', function(req, res){
	console.log(req.params);
	var id=req.params.id;
	MongoClient.connect(dbUrl, function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		// console.log("created", new mongo.ObjectID(id));
		db.collection('user').findOne({ _id : new mongo.ObjectID(id)}, function(err, doc){
			if(err){
				console.log("Error while selecting", err);
				return;
			}
			console.log("data selected", doc);
			// res.redirect('/');
			var pageData={ title : "Update", data : doc};
			res.render('edit', pageData);
		});
	})
});

app.post('/edit/:id', function(req, res){
	console.log(req.params);
	var id=req.params.id;
	MongoClient.connect(dbUrl, function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		// console.log("created", new mongo.ObjectID(id));
		db.collection('user').updateOne({ _id : new mongo.ObjectID(id)}, req.body, function(err, doc){
			if(err){
				console.log("Error while update", err);
				return;
			}
			console.log("data updated", doc);
			res.redirect('/');
			// var pageData={ title : "Update", data : doc};
			// res.render('edit', pageData);
		});
	})
});


app.listen(3000, function(){
	console.log("Server Running");
});
