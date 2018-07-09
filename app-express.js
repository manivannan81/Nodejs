var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');

app.use('/assets', function(req, res, next)
{
    console.log(req.url)
next();
});

app.get('/', function(req, res)
{
    console.log(req.url);
    res.send('This is home page');
});
app.get('/home', function(req, res)
{
    console.log(req.url);
    res.render('home.ejs');
});
app.get('/contact', function(req, res)
{
    console.log(req.url);
    //res.send('This is contact page');
    res.render('contact.ejs');
});
app.get('/about/:name', function(req, res)
{
    console.log(req.url);
    //res.send('This is contact page');
    res.render('about.ejs', {Name: req.params.name});
});
app.get('/qrystring/', function(req, res)
{
    console.log(req.query);
    //res.send('This is contact page');
    res.render('qrystring.ejs', {person: req.query});
});
app.get('/arr', function(req, res)
{
    var arr=['one','two','three','four'];
    res.render('arr.ejs', {Arr: arr});
});
/*app.get('/assets', function(req, res)
{
    console.log(res.)
});*/
app.get('/form', function(req, res)
{
    res.render('form.ejs');
});
app.post('/formpost', urlencodedParser,function(req, res)
{
    console.log(req.body);
    res.render('formpost.ejs', {frm:req.body});
});
app.listen(3000, '127.0.0.1');
console.log('Server Started');