var fs = require('fs');
console.log('started');
fs.readFile('temp1.txt', 'utf-8',function(err, data)
{
    console.log(data);
    fs.writeFileSync('temp2.txt', data);
});


console.log('Ended');