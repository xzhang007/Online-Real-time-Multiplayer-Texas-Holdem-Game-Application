var express = require( 'express' );
var router = express.Router();
var db = require( '../model' );

/* GET a specific message */
router.get( '/:roomId', function( request, response, next ) {
	db.getMessageByRoomId( parseInt( request.params.roomId ) ).then( function( data ) {
		response.status( 200 ).send( data );
	})
});

/* create a message in room #roomId */
router.post( '/:roomId', function( request, response, next ) {
  db.createMessage( parseInt( request.params.roomId ) ).then( function( data ) {
    response.status( 200 ).send( data );
  })
});

/* Create a message in lobby */
router.post('/', function( request, response, next ) {
	db.createMessage( request ).then( function( data ) {
		response.status( 200 ).send( data );
	})
})

module.exports = router;