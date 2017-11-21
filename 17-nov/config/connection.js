var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/tss";

module.exports.init=function(callback){
	MongoClient.connect(url, callback);
}


// MongoClient.connect(url, function(err, db){
	
// })