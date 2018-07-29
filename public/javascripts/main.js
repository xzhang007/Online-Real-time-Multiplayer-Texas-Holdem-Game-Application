const ROOM_ID = 'room-id';
const USER_JOINED = "user-joined";
var socket = io();

const listItem = function (data) {
  const item = $('<a>').attr({
    href: "/game",
    class: "room-item list-group-item",
    'data-roomid': data.id
  });
  const head = $('<h4>', {class: "list-group-item-heading", html: "Room " + data.id});
  const text = $('<div>', {class: "list-group-item-text", html: JSON.stringify(data)});
  item.append(head);
  item.append(text);
  return item[0];
};


$(document).ready(function () {
  /*Fill the score board and room board*/
  $.get("/api/rooms", function (data, status) {
    for (var i = 0; i < data.length; i++) {
      $('#rooms').append(listItem(data[i]));
    }
  });

  $.get("/api/users", function (data, status) {
    for (var i = 0; i < data.length; i++) {
      $('.score1').append(data[i].id);
    }
  });


  /*Operation for chatting button*/
  $('#chat-board button').click(function () {
    const message = $('.form-control').val();
    socket.emit('message', {data: message});
  });

  /*Operation on join room*/
  $('#rooms').on('click', 'a', function () {
    $.cookie(ROOM_ID, $(this).attr("data-roomid"), {path: "/"});
  });

  //socket on the lobby page
  socket.on('message-display', function (data) {
    $('div.message-board').append(data);
  });
});
