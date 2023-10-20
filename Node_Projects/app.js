const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>My First Node Project</title></head>');
    res.write('<body>');
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="message" />');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    res.writeFileSync('message.txt',"data reached")
    res.statusCode=302
    res.setHeader('location','/')
    return res.end(); 
}
res.write('<html>');
res.write('<head><title>My First Web Page with Node</title></head>');
res.write('<body><h1>Welcome to my Node project with Express</h1></body>');
res.write('</html>');
res.end();
});

server.listen(3000, () => {
console.log('Server is running on port 3000');
});

