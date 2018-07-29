var express = require('express');
var router = express.Router();
var db = require('../model');


/* GET home page. */
router.get('/', ( request, response ) => { 
	response.render( 'register' );
    
});





module.exports = router

