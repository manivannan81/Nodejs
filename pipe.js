var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res)
{
    console.log(req.url);
    let rs = fs.createReadStream(__dirname+'\\temp2.txt','utf8');
    var result =[{'Name':'Manivannan','Id':'101','Salary':'3000'},{'Name':'Manivannan1','Id':'1011','Salary':'30001'}]
    res.writeHead(200, {
        //'Content-Type':'text/html'
        'Content-Type':'application/json'
    });
    
    res.end(JSON.stringify(result));
});


server.listen(3000,'127.0.0.1');
console.log('Server Started');