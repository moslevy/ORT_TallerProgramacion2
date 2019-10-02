const fs = require('fs');

fs.readFile('./big.json','utf-8', (err,data) => {
    if(!err){
        console.log(data);
    } else {
        console.log(err.message);
    }
});

setTimeout(() => {
    console.log('Termino de leer');
}, 10);

// espera a terminar de leer el archivo?
//console.log('Esto imprime antes o despues');


