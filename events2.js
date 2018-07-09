var events = require('events');
var utils = require('util');

var person = function(name)
{
    this.Name = name;
};
utils.inherits()