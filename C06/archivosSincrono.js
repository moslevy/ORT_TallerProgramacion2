const fs = require('fs');

let datos = fs.readFileSync('./inventors.json','utf-8');

datos = JSON.parse(datos);
datos.inventors.push(
    {
        
    }
);
//console.table(datos.inventors.filter(value => value.year > 1600));

console.log(JSON.stringify(datos,'','\t'));

// fs.writeFileSync('./texto1.txt', datos, 'utf-8');

//console.log(datos);