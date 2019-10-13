/**
 * Igual que el desafio 1, pero con los siguientes intervalos:
 *  Imprimir "Hola mundo" 5 veces con retardo de 100ms
 *  Imprimir "Hola mundo" 5 veces con retardo de 200ms
 *  imprimir "Hola mundo" 5 veces con retardo de 300ms
 *  ...
 * Incluir en el mensaja el retardo impreso.
 * Ejem.
 *  Hola mundo 1
 *  Hola mundo 1
 *  Hola mundo 1
 *  Hola mundo 1
 *  Hola mundo 1
 *  Hola mundo 2
 *  Hola mundo 2
 *  ...
 * 
 * Restricciones solo para avanzados:
 * Solo usar setInterval, no usar Timeout
 * Solo usar UNA instrucción If
 * */

function saludo(interval){
    let counter = 0;
    const intervalId = setInterval(() => {
        console.log("Hola mundo ", interval);
        counter++;
        if(counter == 5){
            clearInterval(intervalId);
            saludo(interval + 1);
        }
    }, interval * 100);
}

saludo(1);