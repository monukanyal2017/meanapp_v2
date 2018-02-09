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
    var arr="[{ title: 'Rave Digger',file: 'rave_digger',howl: null},{title: '80s Vibe',file: '80s_vibe',howl: null},{title: 'Happy Forever Alone Day',file: 'Happy Forever Alone Day (Forever Alone Song)',howl: null},{title:'In The End',file:'In The End _Official Video_ - Linkin Park',howl:null},{title:'Swag Se Swagat Song',file:'Swag Se Swagat Song',howl:null}]";

	res.render('dashboard'	,{message:req.flash('success'),Name:req.session.passport.user.Name,playerlist:arr});
});



module.exports = router;
