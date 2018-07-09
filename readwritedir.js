var fs = require('fs');

/*fs.mkdir('stuff', function()
{
    fs.readFile('temp1.txt','utf8', function(err, data)
    {
        console.log(data);
        fs.writeFile('stuff/temp2.txt', data);
    })
})*/

fs.unlink('stuff/temp2.txt', function()
{
    fs.rmdir('stuff');
})