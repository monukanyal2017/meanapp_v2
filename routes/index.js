const express = require('express');
const passport = require('passport');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/');
var User=require('../Models/user.js'); //including model
/* GET home page. */

router.get('/', function (req, res) {

      //console.log('flash'+req.flash('error'));
      res.render('login',{message:req.flash('error')});
});

router.post('/login',passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/', failureFlash: 'Please provide correct username and password!!',successFlash: 'Welcome!'  }));

router.get('/logout', ensureLoggedIn, function(req, res, next) {
    req.session.destroy();
    //res.json({ status: 'done' });
    res.redirect('/');
}); 



  router.get('/profile', ensureLoggedIn, function(req, res, next) {
    User.find({_id:req.session.passport.user._id}).exec(function(err,results){
    if(err){
      console.log(err);
    }else
    {
      console.log(results);
      res.render('profile',{data:results,Name:req.session.passport.user.Name})
    }
    
  });
}); 

/*
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', passport.authenticate('local', {
  clientID: env.AUTH0_CLIENT_ID,
  domain: env.AUTH0_DOMAIN,
  redirectUri: env.AUTH0_CALLBACK_URL,
  responseType: 'code',
  audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
  scope: 'openid profile'}),
  function(req, res) {
    res.redirect("/");
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/user');
  }
);

router.get('/failure', function(req, res) {
  var error = req.flash("error");
  var error_description = req.flash("error_description");
  req.logout();
  res.render('failure', {
    error: error[0],
    error_description: error_description[0],
  });
});

*/

module.exports = router;
