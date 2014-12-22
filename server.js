var express = require('express');
var app = express();
var http = require('http').Server(app);
var ejs = require('ejs');
var io = require('socket.io');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('time');
});

http.listen(8001);

console.log('Listening to port: * 8001');

var serv_io = io.listen(http);
console.log('socket connected');

serv_io.sockets.on('connection', function(socket){
  setInterval(function(){
    socket.emit('date', {'date': new Date()});
  }, 1000);
});
