var express = require('express');
var router = express.Router();


router.get('/', function (request, response) {
  response.render('index');
});

module.exports = router;