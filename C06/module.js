//function(exports, module, require, __filename, __dirname){
    let g = 5;

    //console.log(arguments);
    // exports.a = 34;
    // module.exports.b= 45;

    let array = [1,2,3,4];

    module.exports = array;

    module.exports.sumar = (a,b) => a +b;
    module.exports.restar = (a,b) => a - b;
    module.exports.multiplicar = (a,b) => a * b;

    // return module.exports;
//}