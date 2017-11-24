var express=require('express');
var router=express.Router();

router.get('/signup', function(req, res){
	var pageData={ title : "Signup Page", pagename : './signup/index' };
	res.render('layout', pageData);
});



module.exports=router;