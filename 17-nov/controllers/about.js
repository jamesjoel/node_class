var express=require('express');
var router=express.Router();

var about=require('../models/about');

router.get('/about', function(req, res){
	about.getAll(function(err, doc){
		console.log(doc);
	});
	//console.log('about / calling');
	// res.send('about page call');
});
// router.post('/about/:id')
module.exports=router;