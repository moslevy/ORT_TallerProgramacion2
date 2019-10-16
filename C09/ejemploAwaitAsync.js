/**
 * realiza el pedido de 🍕 que demora 200ms
 */
function realizarPedido(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('🍕');
        }, 200);
    });
}

/**
 * realiza el pago 💸 online que demora 300ms
 */
function realizaPagoOnline(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('💸');
        }, 300);
    });
}

/**
 * 
 * realiza el envio a domicio 🚴 500mms
 */
function realizaEnvioDomicilio(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('🚴');
        }, 500);
    });
}

// function principal(){
//     console.log(realizarPedido());
//     console.log(realizaPagoOnline());
//     console.log(realizaEnvioDomicilio());
//     console.log('Termino de realizar toda las operaciones');
// }

 async function compraOnline() {
    const pedidoTerminado = await realizarPedido();
    const pagoTerminado = await realizaPagoOnline();
    const envioTerminado = await realizaEnvioDomicilio();

    console.log(`${pedidoTerminado} + ${pagoTerminado} + ${envioTerminado} = cliente :) `);

 }

compraOnline();

