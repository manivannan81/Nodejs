var events = require('events');
var eventEmit = new events.EventEmitter();
eventEmit.on('someevent', function(msg)
{
    console.log(`The message is ${msg}`);
});
eventEmit.emit('someevent', 'Manivannan1');
///Need to undrestand the object event