var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res)
{
    console.log('Request URL:' +req.url);
    if(req.url =="/" || req.url =="/home")
    {
        let rs = fs.createReadStream(__dirname+'//templates/home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        rs.pipe(res);
    }
    else if(req.url =="/contact")
    {
        let rs = fs.createReadStream(__dirname+'//templates/contact.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        rs.pipe(res);
    }
    else if(req.url =="/contact1")
    {
        let rs = fs.createReadStream(__dirname+'//templates/contact.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        rs.pipe(res);
    }
    else
    {
        let rs = fs.createReadStream(__dirname+'//templates/404.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        rs.pipe(res);
    }


});

server.listen(3000,'127.0.0.1');
console.log('Server Started');