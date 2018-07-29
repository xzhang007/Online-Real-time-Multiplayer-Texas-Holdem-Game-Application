var express = require('express');
var router = express.Router();
var db = require('../model');


router.post( '/', function( request, response, next ) {
  console.log( request.body.email );
  console.log( request.body.password );
	db.verifyUserByEmailAndPassword( request.body.email, request.body.password )
	  .then( function( data ) {
	    request.session.user_id = data.email;
	    response.cookie('email', data.email);
	    response.cookie('user_id', data.id);
      response.redirect('/lobby');
  	})
  	.catch( function( error ) {
  	  console.log( error );
  	  //alert("no matched email and password");
  	  response.redirect('/login');
  	  response.status( 200 ).send( "no matched email and password" );

  	})
});


module.exports = router;