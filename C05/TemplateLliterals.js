console.log("Primera linea\n" + "segunda linea");
console.log("primera linea" + "\n segunda linea");
console.log("primera linea\nsegunda linea");

const a = 2;
const b = 3;

console.log(`La suma de a y b es ${a + b}. 
El producto de a y b es ${a * b}.`);


let c = 5;
let d = 10;

function foo(strings, ...values) {
    console.log("." + strings[0] + ".");
    console.log("." + strings[1] + ".");
    console.log("." + strings[2] + ".");
    console.log("." + strings[3] + ".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
}

foo`Sum ${c + d}
Product ${c * d}
Division ${c / d}`;