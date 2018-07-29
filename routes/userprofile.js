var express = require('express');
var router = express.Router();
var db = require('../model');

/* GET users listing. */

/*router.get('/', function (req, res, next) {
  db.getAllUsers().then(function (data) {   
  	//response.status(200).send(data); 
  	res.render('userprofile');  
  })
});
*/

/* GET a specific user id */
router.get('/:id', function(req, res, next) {
	db.getUserById(parseInt(req.params.id)).then(function(data) {
		//res.status(200).send(data);
		res.render('userprofile', {userData: data});
	})
});

/* create a user id */
/*router.post('/', function(req, res, next) {
	db.createUser(req).then(function(data) {
		res.status(200).send(data);
	})
})*/


module.exports = router;
