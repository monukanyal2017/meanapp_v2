const express = require('express');
const passport = require('passport');
const router = express.Router();
var Book=require('../Models/Book.js'); //including model

router.get('/',function(req,res){
	Book.find({}).exec(function(err,results){
		if(err)
		{
			res.status(400).json({ error: err });
		}
		else
		{
			res.status(200).json({ data: results });
		}
	});
});

router.post('/',function(req,res){
	var newBook=new Book();
	newBook.Title=req.body.Title;
	newBook.Author=req.body.Author;
	newBook.Category=req.body.Category;
	newBook.save(function(err,results){
		if(err)
		{
			res.status(400).json({ error: err });
		}
		else
		{
			res.status(200).json({ data: results });
		}
	});
});

router.get('/:id',function(req,res){
	Book.find({_id:req.params.id}).exec(function(err,results){
		if(err)
		{
			res.status(400).json({ error: err });
		}
		else
		{
			res.status(200).json({ data: results });
		}
	});
});


router.put('/:id',function(req,res){
	Book.findOneAndUpdate({_id:req.params.id},{$set: {Title:req.body.Title}},{upsert:true}, function(err,results){
		if(err)
		{
			res.status(400).json({ error: err });
		}
		else
		{
			res.status(200).json({ data: results });
		}
	});
});


router.delete('/:id',function(req,res){
	Book.findOneAndRemove({_id:req.params.id}, function(err,results){
		if(err)
		{
			res.status(400).json({ error: err });
		}
		else
		{
			res.status(200).json({ data: results });
		}
	});
});




module.exports = router;