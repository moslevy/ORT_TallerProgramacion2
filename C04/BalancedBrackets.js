// 

// pila FILO/LIFO (primero entrar, ultimo en salir )
// pila.push() // poner al final
// pila.pop() // sacar del principio
// cola FIFO (primero entra primero salir)
// cola.shift()
// cola.unshift()

function EstaBalanceado(s){
    let pila= [];
    let cola = s.split("");
    let estaBalanceado = true;

    while (cola.length > 0) {
        // obtengo el primero
        let item = cola.shift();
        switch (item) {
            case "{":
            case "[":
            case "(":
                pila.push(item);
                break;
            case "}":
                if(pila.pop() != "{")
                    estaBalanceado = false;
                break;
            case "]":
                if(pila.pop() != "[")
                    estaBalanceado = false;
                break;
            case ")":
                if(pila.pop() != "(")
                    estaBalanceado = false;
                break;
            default:
                estaBalanceado = false;
                break;
        }
    }

    if(pila.length != 0) estaBalanceado = false;

    return (estaBalanceado)?"YES":"NO";
}

function EstaBalanceadoSimple(s){
    let n = -1;

    while (s.length !=n) {
        n = s.length;
        s = s.replace('()','');
        s = s.replace('{}','');
        s = s.replace('[]','');
    }

    return s.length == 0 ? 'YES':'NO'
    // 
}

//console.log(EstaBalanceadoSimple('[[(({}))]]['));
console.log(EstaBalanceado("[[(({}))]]["));
