var fs = require('fs');

let readStream = fs.createReadStream(__dirname+'\\temp1.txt');
let writeStream = fs.createWriteStream(__dirname+'\\temp2.txt');
//console.log(__dirname+'\\temp1.txt');
readStream.pipe(writeStream);
/*readStream.on('data', function(data)
{
    writeStream.write(data);
    console.log("read chunk");
    console.log(data);
})*/
//readStram.emit('read');