const fs = require('fs');

fs.readFile('./big.json','utf-8', (err,data) => {
    if(!err){
        // estoy seguro que termino de leer el archivo
        console.log(data);
    } else {
        console.log(err.message);
    }
});

// aca estoy seguro?

setTimeout(() => {
    console.log('Termino de leer');
}, 10);

// espera a terminar de leer el archivo?
//console.log('Esto imprime antes o despues');


