const streamLib = require('./streamLib');
const fs = require('fs');

// fs.readFile('./bigFile.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data);
// }); //puts huge pressure on memeory and processor

//streamLib.createBigFile();

//streamLib.readBigFile();

streamLib.copy();