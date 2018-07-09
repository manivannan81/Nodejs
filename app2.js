var stuff = require('./counter');
var fun1 = function()
{
    console.log('Function1');
}

var fun2 = function(fun11)
{
    console.log('Function2');
fun11();
}

fun2(fun1);
console.log(stuff.counter(['manivannan','balakrishnan','kk']));
console.log(stuff.added(34,56));