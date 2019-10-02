

// setTimeout(() => {
//     console.log("Hola mundo depues de 5 segundos");
// }, 5 * 1000);

// console.log('Esto va primero?');

// const rocks = quien => {
//     console.log(quien + ' rocks');
// }

// setTimeout(rocks, 2 * 1000, ' Taller 2');

// Hola despues de 4 segundos
// Hola despues de 8 segundos

const mifuncion = tiempo => {
    console.log('Hola despues de ' + tiempo + ' segundos');
}

setTimeout(mifuncion, 4 * 1000, 'cuatro');

setTimeout(mifuncion, 8 * 1000, 'ocho');



    
