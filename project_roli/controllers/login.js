var express=require('express');
var router=express.Router();

router.get('/login', function(req, res){
	var pageData={ title : "Login Page", pagename : './login/index' };
	res.render('layout', pageData);
});

router.post('/login', function(req, res){
	console.log('login post');
	console.log(req.body);
	if(req.body.email=="tss@gmail.com" && req.body.password=="123")
	{
		// console.log("YES");
		req.session.user_logged_in=true;
		res.redirect('/user');
	}
	else{
		console.log("NO");
		res.redirect('/login');
	}
});

module.exports=router;