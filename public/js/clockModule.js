var socket = io.connect();

function time(socket){
  socket.on('time', function(data){
    $('.time').html(data.time);
  });
};

function hour(socket){
  socket.on('hour', function(data){
    $('.hand.hour').animate({rotate: data.hour})
  });
};

function minute(socket){
  socket.on('minute', function(data){
    $('.hand.minute').animate({rotate: data.minute})
  });
};

function second(socket){
  socket.on('second', function(data){
    $('.hand.second').animate({rotate: data.second})
  });
};
