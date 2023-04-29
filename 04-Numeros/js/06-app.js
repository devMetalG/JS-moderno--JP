const num1 = "20";
const num2 = "20.2";
const num3 = "Uno";
const num4 = 20;
const num5 = 20.2;

console.log(num1);
// se convierte a numero entero por que no tiene decimales
console.log(Number.parseInt(num1));

// se convierte a numero flotante por que tiene decimales
console.log(Number.parseFloat(num2));

// se convierte a NaN por que no es un numero
console.log(Number.parseInt(num3));

// pordemos validar si un numero es entero o no
console.log(Number.isInteger(num4));
console.log(Number.isInteger(num5));