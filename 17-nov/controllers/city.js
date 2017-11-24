var express=require('express');
var router=express.Router();

var city=require('../models/city');
router.get('/city', function(req, res){
	city.getAll(function(err, doc){
		console.log(doc);
			res.render('./city', {data :doc});
		});
})
module.exports=router;