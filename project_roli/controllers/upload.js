var express=require('express');
var multer = require('multer');
var router=express.Router();


router.get('/upload', function(req, res){
	// res.send("THIS IS USER PAGE");
	var pageData={ title : "Upload Page", pagename : './upload/index'};
	res.render('layout', pageData);
});
router.post('/upload', multer({ dest : './upload' }).single('image') ,function(req, res){
	console.log(req.file);
});
module.exports=router;
