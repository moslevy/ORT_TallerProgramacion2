// Ejemplo simple de promesas
function retornaPromesa(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Exito! termino');
        }, 10000);
    } )
}

// forma asincrona
async function Foo(){
    await retornaPromesa()
    .then((value) =>{
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

    console.log('Los clientes ya fueron descargados');
}
Foo();


