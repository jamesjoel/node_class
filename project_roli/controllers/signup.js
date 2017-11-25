var express=require('express');
var router=express.Router();
var user=require('../models/user');

router.get('/signup', function(req, res){
	var pageData={ title : "Signup Page", pagename : './signup/index' };
	res.render('layout', pageData);
});
router.post('/signup', function(req, res){
	delete req.body.cnf_password;
	user.insert(req.body, function(err, result){
		if(err){
			console.log('Insert Error', err);
			return;
		}
		req.flash('msg', 'Signup Complete');
		res.redirect('/login');
	});
});


module.exports=router;