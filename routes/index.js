var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.redirect('/zaposlicakija');
})

router.get('/zaposlicakija', function(req, res){
	res.render('index');
})


module.exports = router