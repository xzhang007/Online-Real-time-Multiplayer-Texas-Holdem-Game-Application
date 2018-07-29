var express = require('express');
var router = express.Router();
var db = require('../model');

/* Get all rounds */
router.get( '/', function ( request, response, next ) {
  db.getAllRounds().then( function ( data ) {
    response.status( 200 ).send( data );
  })
});

/* Get a specific round */
router.get( '/:id', function ( request, response, next ) {
  db.getRoundById( parseInt( request.params.id) ).then( function ( data ) {
    response.status( 200 ).send( data );
  })  
});

/* Create a Round in room #roomId */
router.post('/:roomId', function( request, response, next ) {
	db.createRound( request ).then( function( data ) {
		response.status( 200 ).send( data );
	})
});

/* Update a Round in room #roomId */
router.post('/:roomId', function( request, response, next ) {
	db.updateRoundById( request ).then( function( data ) {
		response.status( 200 ).send( data );
	})
});

module.exports = router;