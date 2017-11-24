var express=require('express');
var router=express.Router();

router.use('/user', function(req, res, next){
	if(! req.session.user_logged_in)
	{
		res.redirect('/login');
	}
	// console.log(req.session);
	next();
})

router.get('/user', function(req, res){
	res.send("THIS IS USER PAGE");
});
module.exports=router;