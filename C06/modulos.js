// function(exports, module, require, __filename, __dirname){

//exports.a = 34;
module.exports = [1,2,3,4];

module.exports.sumar = (a,b) => a + b;
module.exports.restar = (a,b) => a - b;
module.exports.multiplicar = (a,b) => a*b;
console.log('Llamada de otro modulo');

module.exports.div = (a,b) => a / b;

// return module.exports;
//}