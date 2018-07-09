var fs = require('fs');
var events = require('events');

var ev = new events.EventEmitter();

ev.on('someevent', function(data)
{
    console.log(data);
})

var ReadFile = function()
{
    let result = null;
    //result = fs.readFileSync('temp1.txt', 'utf8');
    //ev.emit('someevent','manivannan');
    fs.readFile('temp1.txt', 'utf8', function(err, data)
{
    //this.result = data;
    //console.log(data);
    ev.emit('someevent',data);
   
    //console.log('file reading');
});
//console.log('file reading1');
return result;
}

module.exports =
{
ReadFile : ReadFile
}