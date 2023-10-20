var http = require('http');
var uc = require('upper-case');
var lc = require('lower-case')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!-------> this smaller text is converted to UPPERCASE letters"));
  res.write(lc.lowerCase("This UPPER CASE LETTERS ARE CONVERTED INTO LOWER CASE"));
  res.write('<br>');
  res.end();
}).listen(3000);