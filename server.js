let http = require('http');

let server = http.createServer(function(req, res)
{
    console.log(req.url +new Date());
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('welcome to server');
});
server.listen(3000, '127.0.0.1');
console.log('server started');