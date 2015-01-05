var socket = io.connect();

function time(socket){
  socket.on('time', function(data){
    $('.time').html(data.time);
  });
};

function hourHand(socket){
  socket.on('hour', function(data){
    $('.hand.hour').animate({rotate: data.hour})
  });
};

function minuteHand(socket){
  socket.on('minute', function(data){
    $('.hand.minute').animate({rotate: data.minute})
  });
};

function secondHand(socket){
  socket.on('second', function(data){
    $('.hand.second').animate({rotate: data.second})
  });
};


$(document).ready(function(){
  time(socket);
  hourHand(socket);
  minuteHand(socket);
  secondHand(socket);
});
