var temp_connect=require('../config/temp_connection');

module.exports.getAll=function(cb){
	temp_connect.init(function(err, db){
		db.collection('city').find().toArray(cb)
	});
}
