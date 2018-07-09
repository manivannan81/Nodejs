var express = require('express');
var app = express();
app.get('/', function(req, res)
{
    res.send('Welcome to home page');
});

app.get('/contact', function(req, res)
{
    res.send('Welcome to contact page');
});
app.listen(3000,'127.0.0.1');