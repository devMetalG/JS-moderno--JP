const carrito = [
  {nombre: 'Monitor', precio: 300},
  {nombre: 'Tablet', precio: 400},
  {nombre: 'Celular', precio: 500},
  {nombre: 'Teclado', precio: 600},
  {nombre: 'Reloj', precio: 700},
  {nombre: 'Procesador', precio: 800},
  {nombre: 'Motherboard', precio: 900}
];

// Foor loop

for(let i = 0; i < carrito.length; i++){
  console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// For each


const arregloForEach =  carrito.forEach( function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

// map crea un arreglo nuevo



const arregloMap = carrito.map( function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log('For each');
console.log(arregloForEach);
console.log('map');
console.log(arregloMap);