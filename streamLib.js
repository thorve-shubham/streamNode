const fs = require('fs');


function createBigFile(){
    const fileData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum magna ex, id rhoncus dolor semper porttitor. Ut tempor risus mollis laoreet pretium. Maecenas ante orci, sollicitudin eget nisi eu, placerat euismod est. Mauris vitae lacinia ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer eu dolor malesuada, rutrum massa vitae, iaculis mi. Donec venenatis purus tempus felis luctus efficitur. Donec id sodales justo. Quisque turpis erat, lobortis vel leo ac, tincidunt sollicitudin est. Mauris cursus vulputate augue nec fringilla. Proin gravida placerat velit sed lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus nec metus eget ipsum lacinia aliquam semper a massa. Sed vitae semper tellus. Quisque a volutpat elit, vel elementum enim. Quisque id malesuada velit, sit amet auctor tortor.";
    let ws = fs.createWriteStream("bigFile.txt");
    for(let i=0;i<1e6;i++){
        ws.write(fileData);
    }
    ws.end();
}

function readBigFile(){
    const rs = fs.createReadStream('bigFile.txt',{encoding:'utf8'});
    rs.on('data',(chunk)=>{
        console.log(chunk);
    });
    rs.on('end',()=>{
        console.log("done");
    })
}

function copy(){
    const rs = fs.createReadStream('bigFile.txt');
    const ws = fs.createWriteStream('copied.txt');

    rs.on('data',(data)=>{
        ws.write(data);
    });
    rs.on('end',()=>{
        console.log("done");
    });
}

module.exports.createBigFile = createBigFile;
module.exports.readBigFile = readBigFile;
module.exports.copy = copy;