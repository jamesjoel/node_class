var express=require('express');
var router=express.Router();

router.use(['/user','/setting'], function(req, res){

})

router.get('/', function(req, res){
	var pageData={ title : "Home Page", pagename : './home/index' };
	res.render('layout', pageData);
});

// router.post('/login', function(req, res){
// 	console.log('post calling');
// })
router.all('/user', require('../controllers/user'));
router.all('/login', require('../controllers/login'));
router.all('/signup', require('../controllers/signup'));
// router.get('/about', require('../controllers/about'));

module.exports=router;