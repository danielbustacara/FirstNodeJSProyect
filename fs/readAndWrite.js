var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt','UTF-8');
console.log(readMe);

fs.writeFileSync('writeMe.txt',readMe);
