var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {
  res.write("The date and time are currently: " + dt.myDateTime());
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
  res.end();
}).listen(8080,()=>{
    console.log("server is runiing on port no 8080")
});