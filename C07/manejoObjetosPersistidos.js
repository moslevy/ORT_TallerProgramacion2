const fs = require('fs');
const path = './inventors.json';

let datos = fs.readFileSync(path,'utf-8');

datos = JSON.parse(datos);

const inventorNuevo = {
    first: "Pablo",
    last: "Fernandez",
    year: 1976
}

datos.inventors = pushInventor(inventorNuevo, datos.inventors);
saveInventors(path,datos);

console.log(datos);

/**
 * Funcion para insertar un inventor en el array
 * @param {*} inventor objeto inventor
 * @param {*} inventors array de inventores
 */
function pushInventor(inventor, inventors){
    inventors.push(inventor);
    return inventors;
}

/**
 * Function que persiste un conjunto de objetos inventors
 * @param {*} path 
 * @param {*} datos 
 */
function saveInventors(path, datos){
    fs.writeFileSync(path, JSON.stringify(datos,'','\t'),'utf-8' );
}

/**
 * function para eliminar inventor de la coleccion de inventors
 * @param {*} inventor 
 * @param {*} inventors 
 */
function removeInventor(inventor, inventors){
    
}


