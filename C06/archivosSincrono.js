const fs = require('fs');
const path = './inventors.json';

let datos = fs.readFileSync(path,'utf-8');

datos = JSON.parse(datos);

const inventor = {
    first: "Pablo",
    last: "Fernandez",
    year: 1967
}

datos.inventors = pushInventor(inventor, datos.inventors);

SaveInventors(path,datos);

datos.inventors = removeInventor(inventor, datos.inventors);

SaveInventors(path,datos);

/**
 * Almacena en archivo el Json de Inventors
 * @param {*} path ruta del archivo
 * @param {*} datos  json de inventors
 */
function SaveInventors(path, datos){
    fs.writeFileSync(path, JSON.stringify(datos, '', '\t'), 'utf-8');
}

/**
 * Inserta un inventor en el array de inventores
 * @param {*} inventor  objeto inventor
 * @param {*} inventors array de inventores
 */
function pushInventor(inventor, inventors){
    inventors.push(inventor);
    return inventors;
}

/**
 * Elimina un inventor por el first y el last
 * @param {*} inventor objeto inventor
 * @param {*} inventors array de inventores
 */
function removeInventor(inventor, inventors){
    
    return inventors.filter(itemInventor => 
        inventor.first != itemInventor.first && inventor.last != itemInventor.last
    );
}