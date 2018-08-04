var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/add', function(req,res){
	res.render('add');

});
router.get('/see', function(req,res){
	res.render('see');

});