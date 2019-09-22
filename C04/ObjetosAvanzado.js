const primera = 'casa';
const segunda = 'Fernandez'
const edad = 12;

const persona = {
    primera,
    segunda,
    edad
}

console.table(persona);

const key = 'miclave';
const value = '#ffc600';

const camisa = {
    [key]:value,
    [key+'Secreta']: invertir(value)
}

function invertir(value){
    return value.split('').reverse().join('');
}
console.table(camisa);

