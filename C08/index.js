const fs = require('fs');

fs.readFile('./archivo.json','utf-8',TerminoLeer());

function TerminoLeer(err, data){
    if(!err){
        console.log(data);
    } else {
        console.log(err.message);
    }
}