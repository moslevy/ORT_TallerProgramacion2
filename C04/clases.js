class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    saludo(){
        console.log('Hola ', this.nombre);
    }
}

class Estudiante extends Persona{
    constructor(nombre, nivel){
        super(nombre);
        this.nivel = nivel;
    }

    saludo(){
        console.log('Hola ' + this.nombre + ' del nivel ' + this.nivel);
    }
}

const p1 = new Persona('Juan');
p1.saludo();

const e1 = new Estudiante('Pedro',2);
e1.saludo();

const e2 = new Estudiante('Maria', 3);
e2.saludo = function () {
    console.log('Hola mundo', this.nombre);
}
e2.saludo();

e2.Nueva = function (){
    console.log('Nueva funcion');
}

e2.Nueva();





