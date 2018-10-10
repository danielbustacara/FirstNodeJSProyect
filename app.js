var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request was made by ' + req.url );
  res.writeHead(200,{'Content-Type':'text/html'});
  var myStreamReader = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myStreamReader.pipe(res);
});

server.listen(3000, '127.0.0.1');

console.log('Listening to NodeJS');
