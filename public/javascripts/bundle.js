(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var socket = io();



$(document).ready( function () {
	

	$('#chat-board button').click( function() {	
		const message = $('.form-control').val()
		socket.emit('message', message)		 
	})

	const username = 'lijie'
	socket.emit('userjoin',username)


	//socket on the lobby page
	socket.on('message-display',function(data){
		$('div.message-board').append(data) 
	})

	//socket on the game page showing new user join the game
	socket.on('userupdate',function(data){
		$('div#user-update').append(data)
		console.log(data)
	})

	
	$.get("/api/users", function(data, status){
    	
    	for( i = 0; i < data.length; i++) {
    		$('.score1').append(data[i].money); 
    		$('.score1').append("</br>"); 
    	} 

	})

	$.get("/api/rooms", function(data, status){
		// var r= $('<input type="button" value="new button"/>');
		for( i = 0; i < data.length; i++){
			var r= $('<input type="button" class="join" value="new button"/>');
			// $('.room1').append(data[i].id).append(" ").append(data[i].small_blind); 
			$('.room1').append(data[i].id).append(" ").append(" ").append(r); 
			$('.room1').append("</br>"); 
		}
		$('.room1').find('.join').click( function() {	
			//redirect the user to the selected room
			window.location = "game"; 
		})
	})

	

	
})


},{}]},{},[1]);
