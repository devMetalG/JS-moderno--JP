const autenticado = false;
const puedePagar = true;

// AND y OR

console.log(autenticado && puedePagar ? 'Si puedes pagar' : 'No esta autenticado');
console.log(autenticado || puedePagar ? 'Si puedes pagar' : 'No esta autenticado');

// Anidado

console.log(autenticado? puedePagar? 'Si puedes pagar': 'No puedes pagar' :'No estas autenticado');