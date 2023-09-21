const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true
}

// Antes 
// let nombre = producto.nombre;
// console.log(nombre);

// Ahora 
// Destructuring de Objetos
let { nombre } = producto;
console.log(nombre);

// Destructuring de arreglos 

const numeros = [100, 200, 300, 400, 500];

let [pos0, pos1, pos2, pos3, pos4] = numeros;

console.log(pos0);
console.log(pos1);
console.log(pos2);
console.log(pos3);
console.log(pos4);

const numeros2 = [100, 200, 300, 400, 500];

let [ , , , ps3] = numeros2;

console.log(ps3);

const numeros3 = [100, 200, 300, 400, 500];

let [p0, p1, ...resto] = numeros3;

console.log(p0);
console.log(p1);
console.log(resto);