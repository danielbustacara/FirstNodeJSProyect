var http = require('http');
var fs = require('fs');

var myReadStream =  fs.createReadStream(__dirname + '/README.MD','utf8');
var myWriteStream =  fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.on('data',function(chunck){
  console.log('Read File');
  myWriteStream.write(chunck);
});
