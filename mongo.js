/*
Author : James Joel
Type : Tutorial
Title : Mongodb queries in node.js (express)
Overview : MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document.
vocabulary : 
		
		SQL						MongoDB
		database				database
		table					collection
		row						document
		column					field

		JSON					Java Script Object Notation

		(MongoDB Convert JSON Object to Binary-Encoded format Called BSON)
		BSON					Binary JSON

---------------------------------------------------------------------------------------


*/
var express=require('express');
var app=express();
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/tss";
var insertData=[
	{
		name : "roli",
		age : 23, 
		fee : 2500,
		city : 'indore',
		gender : "female"

	},
	{
		name : "priyanka",
		age : 24, 
		fee : 2700,
		city : 'ujjain',
		gender : "female"

	},
	{
		name : "gaurav",
		age : 30, 
		fee : 3000,
		city : 'bhopal',
		gender : "male"

	},
	{
		name : "ritesh",
		age : 28, 
		fee : 4000,
		city : 'indore',
		gender : "male"

	},
	{
		name : "jaya",
		age : 24, 
		fee : 5000,
		city : 'bhopal',
		gender : "female"

	},
	{
		name : "nidhi",
		age : 22, 
		fee : 1800,
		city : 'ujjain',
		gender : "female"

	},
	{
		name : "nilesh",
		age : 25, 
		fee : 3000,
		city : 'indore',
		gender : "male"

	},
	{
		name : "karan",
		age : 26, 
		fee : 3000,
		city : 'indore',
		gender : "male"

	}
];
var connectDB=function(cb){
	MongoClient.connect(url, cb);
}

var insert=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		db.collection('student').insert(insertData, function(err, result){
			if(err){
				console.log('Inserting Error', err);
				return;
			}
			console.log('Data Saved', result);
		});
	});
}
var getAll=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		db.collection('student').find().toArray(function(err, doc){
			if(err){
				console.log('Selecting Data Error', err);
				return;
			}
			console.log("Data Comming -------------", doc);
		});
	});
}
var getAllLimit=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		db.collection('student').find().limit(2).toArray(function(err, doc){
			if(err){
				console.log('Selecting Data Error', err);
				return;
			}
			console.log("Data Comming -------------", doc);
		});
	});
}
var getAllLimitSkip=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		// db.collection('student').find().limit(2).skip(4).toArray(function(err, doc){ // same as
		db.collection('student').find({}, { limit : 3, skip : 2}).toArray(function(err, doc){
			// same as

			if(err){
				console.log('Selecting Data Error', err);
				return;
			}
			console.log("Data Comming -------------", doc);
		});
	});
}

/* ----------------------------------------------------------------------------
Comparison Query Operator
 1. $eq ----------- equal to
 2. $gt ----------- greater than
 3. $gte ----------- greater equal to
 4. $in ----------- matches value form array
 5. $lt ----------- less then
 6. $lte ----------- less then equal to
 7. $ne ----------- not equal to
 8. $nin ----------- matches non of values form array 
*/

var getAllByOperator=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		// db.collection('student').find({ fee : { $eq : 3000 }}).toArray(function(err, doc){ // WHERE fee = 3000
		//db.collection('student').find({ fee : { $gte : 3000, $lt : 5000 }}).toArray(function(err, doc){ // WHERE fee >= 3000 AND fee < 5000
		// db.collection('student').find({ city : { $in : ['ujjain', 'bhopal'] }}).toArray(function(err, doc){ // same as IN
		db.collection('student').find({ city : { $nin : ['ujjain', 'bhopal'] }}).toArray(function(err, doc){ // same as NOT IN
			if(err){
				console.log('Selecting Data Error', err);
				return;
			}
			console.log("Data Comming -------------", doc);
		});
	});
}

/* ----------------------------------------------------------------------------
Logical Query Operator
 1. $and ----------- AND
 2. $not ----------- NOT
 3. $nor ----------- NOR
 4. $or ----------- OR
*/
var getAllByLogical=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		/*AND----*/ //db.collection('student').find({ city : "ujjain", age : { $lt : 25 } }).toArray(function(err, doc){ 
		/*AND----same like */ //db.collection('student').find({ $and : [{ city : 'ujjain' }, {age : {$lt : 25}}] }).toArray(function(err, doc){ 
		/*OR----*/ //db.collection('student').find({ $or : [{ city : 'indore' }, { age : {$lt : 25}}] }).toArray(function(err, doc){ 
		/*NOR---- */ db.collection('student').find({ $nor : [{ city : 'indore' }, { age : {$lt : 25}}] }).toArray(function(err, doc){ 
			if(err){
				console.log('Selecting Data Error', err);
				return;
			}
			console.log("Data Comming -------------", doc);
		});
	});
}

/* ----------------------------------------------------------------------------
Element Query Operator
 1. $exists ----------- match the specified field or not
 2. $type ----------- match the specified field type

	Type List 

	1				double
	2				string
	3				object
	4				array
	5				binData
	6				undefined
	7				ObjectId
	8				Boolean
	9				Date
	10				Null
	11				Regex

	find out complete list : https://docs.mongodb.com/manual/reference/operator/query/type/#op._S_type

*/

var getAllByElement=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		// db.collection('student').find({ age : { $exists : true }}).toArray(function(err, doc){ 
			// Return all document (row) that contain 'age' field
		//db.collection('student').find({ age : { $exists : false }}).toArray(function(err, doc){ 
			// Return all document (row) that not contain 'age' field
		db.collection('student').find({ age : { $type : 1 }}).toArray(function(err, doc){ 
			// Return all document there 'age' field type is 1, We also pass array in $type : [1, 4, 5]
			if(err){
				console.log('Selecting Data Error', err);
				return;
			}
			console.log("Data Comming -------------", doc);
		});
	});
}


/* ----------------------------------------------------------------------------
Evaluation Query Operator
 1. $mod ----------- divided by a divisor has the specified remainder
 2. $regex ----------- match the specified field type
 3. $text ----------- match the specified field type
	the $text operator accepts a text query document with the following fields
	$search, $language, $caseSensitive

 4. $where ----------- match the specified field type

 */

 var getAllByEva=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		/*$mod----*/ //db.collection('student').find({ fee : { $mod : [3, 0] }}).toArray(function(err, doc){ 
		/*$regex----*/ db.collection('student').find({ city : { $regex : /ujj/ }}).toArray(function(err, doc){ 
		// /*$where----*/ db.collection('student').find({"this.name == this.city"}).toArray(function(err, doc){ 
					//NOT WORKING ---->>>>> SKIP THIS >>>> $where
			if(err){
				console.log('Selecting Data Error', err);
				return;
			}
			console.log("Data Comming -------------", doc);
		});
	});
}

// getAllByEva();



/*
************************************************************************************************************
---------------------	Now We Discus about some mothods applying on Collection   --------------------------

1 aggregate --- letter
2 bulkWrite - do it yourself
3 count
4 copyTo -- not working
5 deleteOne -- do it yourself
6 deleteMany -- do it yourself
7 distinct 
8 drop -- do it yourself (drop the collection)
9 find
10 findOne
11 findOneAndDelete
12 findOneAndReplace
13 group
14 insert
15 insertOne
16 insertMany
17 remove
18 renameCollection
19 save (insert and update)
20 stats (return statistics of collection)
21 update
22 updateOne
*/
var count=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		db.collection('student').count(function(err, doc){	
			console.log(doc);
		});
	});
}
var distinct=function(){
	connectDB(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		db.collection('student').distinct('city',function(err, doc){	
			console.log(doc);
		});
	});
}
distinct();

/************************************************************************************************************
---------------------	Cursor Methods   --------------------------

1 count
2 explain
3 forEach
4 hasNext
5 limit
6 maxScan
7 max
8 min
9 next
10 pretty
11 size
12 skip
13 sort
14 toArray

*/
