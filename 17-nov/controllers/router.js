var express=require('express');
var router=express.Router();

router.get('/', function(req, res){
	console.log('calling');
});
router.get('/about', require('../controllers/about'));
router.get('/contact', require('../controllers/about'));


module.exports=router;