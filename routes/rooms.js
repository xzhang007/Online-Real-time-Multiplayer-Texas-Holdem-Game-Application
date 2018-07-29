var express = require('express');
var router = express.Router();
var db = require('../model');

/* GET users listing. */


router.get('/', function (req, res, next) {
  db.getAllRooms().then(function (data) {
    res.status(200).send(data);
  })
});

router.get('/:id', function (req, res, next) {
  db.getRoomById(parseInt(req.params.id)).then(function (data) {
    res.status(200).send(data);
  })  
});

router.post('/:id', function (req, res, next){
	db.updateRoomById(parseInt(req.params.id)).then(function(data){
		res.status(200).send(data);
	})
}); 



module.exports = router;
