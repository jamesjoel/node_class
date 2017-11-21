var con=require('../config/connection');

// var collection='about';
module.exports.getAll=function(callback){
	con.init(function(err, db){
		db.collection('about').find().toArray(callback);
	});
}

module.exports.insert=function(data, callback){
	con.init(function(err, db){
		db.collection('about').insert(data, callback);
	});
}