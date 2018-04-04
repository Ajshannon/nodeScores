const http = require('http');
const hostname = '';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Wassup Brev\n');
  res.end()
  console.log(req.headers);
  console.log(req.method);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

