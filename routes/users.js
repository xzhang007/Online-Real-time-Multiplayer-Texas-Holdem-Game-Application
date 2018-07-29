var express = require('express');
var router = express.Router();
var db = require('../model');

/* GET users listing. */
router.get('/', function (request, response){
  db.getAllUsers().then(function (data) {   
  	response.status(200).send(data);   
  })
});


/* GET a specific user id */
router.get('/:id', function(req, res, next) {
	db.getUserById(parseInt(req.params.id)).then(function(data) {
		res.status(200).send(data);
	})
});


/* create a user */
router.post('/', function(req, res, next) {
	//var email = req.body.email;
	db.createUser(req)
	  //.then(function() {
	  	//db.getUserByEmail(email)
	  	  .then(function(data) {
	  	  	res.cookie('email', data.email)
			res.render('index')
	  	  })
		
	//})

	  
});


module.exports = router;
