const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/');
const router = express.Router();
var User=require('../Models/user.js'); //including model
/* var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url ="mongodb://Esfera:esfera456@ds133547.mlab.com:33547/esferasoft"; */


/* GET user dashbard. */
router.get('/', ensureLoggedIn, function(req, res, next) 
{
	//console.log('session email:'+req.session.passport.user.Name);

	res.render('dashboard'	,{message:req.flash('success'),Name:req.session.passport.user.Name});
});



module.exports = router;
