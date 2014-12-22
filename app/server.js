var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var server = http.createServer(function(req, res){
  // your normal server code
  var path = url.parse(req.url).pathname;
  console.log(path);

  switch (path){
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>Hello! Try the <a href="/socket.html">Socket page</a></h1>');
      res.end();
      break;

    case '/socket.html':

      fs.readFile(__dirname + path, function(err, data){
        if (err){
          return send404(res);
        }
        res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'});
        res.write(data, 'utf8');
        res.end();
      });

      break;
      default: send404(res);
    }
  }),

  send404 = function(res){
    res.writeHead(404);
    res.write('404');
    res.end();
  };

server.listen(8001);

console.log('Listening to port: * 8001');

var serv_io = io.listen(server);
console.log('socket connected');

serv_io.sockets.on('connection', function(socket){
  setInterval(function(){
    socket.emit('date', {'date': new Date()});
  }, 1000);
});
