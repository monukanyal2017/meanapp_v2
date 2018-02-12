const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/');
const router = express.Router();
var async=require('async');
var User=require('../Models/user.js'); //including model
var Song=require('../Models/Songs.js'); //including model
var search = require('youtube-search');


var opts = {
  maxResults: 8,
  key: 'AIzaSyDnjiB1yHIkT3BDVTpf80LqC3fMZ8_ygIU'
};


/* var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url ="mongodb://Esfera:esfera456@ds133547.mlab.com:33547/esferasoft"; */


/* GET user dashbard. */
router.get('/', ensureLoggedIn, function(req, res, next) 
{
	 //var arr="[{title: 'Happy Forever Alone Day',file: 'Happy Forever Alone Day (Forever Alone Song)',howl: null},{title:'In The End',file:'In The End _Official Video_ - Linkin Park',howl:null},{title:'Swag Se Swagat Song',file:'Swag Se Swagat Song',howl:null}]";
	Song.find({}).sort([['createdAt', 'descending']]).exec().then((results)=>{
	   var mainarr=[];
	   var i=0;
	 	
		async.each(results, function(result, callback) {
			    var myObj = {};
			       i=i+1;
					myObj.title = result.filepath;
					myObj.file = result.filepath;
					myObj.howl = null;
					mainarr.push(myObj);
					if(i==parseInt(results.length))
					{
					  callback(mainarr,null);
					}
			}, function(result,err) {
			  
			    if( err ) {
			      console.log('failed to process');
			    } else {
			      res.render('dashboard',{message:req.flash('success'),Name:req.session.passport.user.Name,playerlist:JSON.stringify(result)});
			    }
			});  
	
		//
	}).catch((err)=>{
		console.log(err);
		res.render('dashboard'	,{message:req.flash('success'),Name:req.session.passport.user.Name,playerlist:''});
	});
	//console.log('session email:'+req.session.passport.user.Name);
   

	
});

router.post('/search', ensureLoggedIn, function(req, res, next) 
{
	var searchterm=req.body.query;

	search(searchterm, opts, function(err, results) {
	  if(err) return console.log(err);
	      //console.log(results);
          res.status(200).json({ term:searchterm,data:results });
	});
});



module.exports = router;
