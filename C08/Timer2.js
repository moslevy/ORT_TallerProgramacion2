// disparar una funcion en intervalos
// frenar cuando se ejecuta 3 veces
let i = 0;
let timerId = setInterval(() => {
    console.log('Hola cada 3 segundos');
    i ++;
    if(i == 3){
        clearInterval(timerId);
    }
}, 1);


