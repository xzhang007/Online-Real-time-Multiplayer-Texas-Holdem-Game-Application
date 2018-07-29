'use strict';

var db = require( '../db' );


module.exports = {

  /* USERS */
  //createUser: function(){
  //  return db.one('INSERT INTO users VALUES (username, email, password)');
  //},

  getAllUsers: function () {
    return db.any( 'SELECT * FROM users' );
  },

  getUserById: function ( id ) {
  	return db.one( 'SELECT * FROM users WHERE id = $1', id );
  },

  getUserByUsername: function(email) {
    return db.one('SELECT * FROM users WHERE username = $1', email);
  },

  getUserByEmail: function (email) {
    var data = db.one('SELECT * FROM users WHERE email = $1', email);
    console.log(data);
    return data;
  },

  createUser: function (req) {
    return db.one('INSERT INTO users(username,email, password)' +
        'VALUES (${username}, ${email}, ${password}) Returning ${email}', req.body);
  },

  verifyUserByEmailAndPassword: function ( email, password ) {
    return db.one( 'SELECT * FROM users WHERE email = $1 AND password = $2', [email, password] );
  },



  /* ROOMS */
  getAllRooms: function() {
  	return db.any('SELECT * FROM rooms'); 
  },


  getRoomById: function(id) {
    return db.one('SELECT * FROM rooms WHERE id = $1', id); 
  },

  updateRoomById: function(id, numOfPlayer) {
    return db.any('UPDATE rooms SET player_amount = $1 WHERE id = $2', numOfPlayer, id); 
  },

  /* ROUNDS */
  getAllRounds: function(){
    return db.any( 'SELECT * FROM rounds' );
  },

  getRoundById: function(id) {
    return db.one( 'SELECT * FROM rounds WHERE id = $1', id );
  }

};

