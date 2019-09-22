
/**
 * Obtien el area de un rectangulo
 * @param {*} width 
 * Ancho del reactangulo
 * @param {*} height 
 * Alto del rentangulo
 */
function getReactArea(width, height){
    if(isNaN(width)|| isNaN(height)){
        throw 'Alguno de los parametros no es un numero';
    } else {
        return width * height;
    }
}

try {
    console.log(getReactArea(5,5));
} catch (error) {
    console.log(error);
}
