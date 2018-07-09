var counter = function(arr)
{
     return ("The elements are" + arr);
}
var adder = function(a,b)
{
    return `sum of two numbers are ${a+b}`;
}

module.exports = 
{
    counter: counter,
    added: adder
};