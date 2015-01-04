function Sockets(){};

Sockets.prototype.init = function (socket) {
  server_io.sockets.on('connection', function(socket){

    setInterval(function(){
      var date = new Date();
      var time = date.toLocaleTimeString();

      socket.emit('time', {'time': time });
    }, 1000);

    function setHour(){
      var date = new Date();
      var hour = String(date.getHours()/12 * 360);
      socket.emit('hour', {'hour': hour});
    };
    setHour();

    function setMinute(){
      var date = new Date();
      var minute = String(date.getMinutes()/60 * 360);
      socket.emit('minute', {'minute': minute});
    };
    setMinute();

    setInterval(function(){
      var date = new Date();
      var second = String(date.getSeconds()/60 * 360);

      socket.emit('second', {'second': second});
    }, 1000);

  });
};
