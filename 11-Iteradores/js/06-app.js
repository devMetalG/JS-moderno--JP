//ForEach

const pendientes = ['Estudiar JS', 'Comer', 'Proyecto', 'ver anime'];

pendientes.forEach( (pendiente, indice) => 
  console.log(`${indice+1}: ${pendiente}`)
)

const carrito = [
  {nombre: 'Monitor', precio: 300},
  {nombre: 'Tablet', precio: 400},
  {nombre: 'Celular', precio: 500},
  {nombre: 'Teclado', precio: 600},
  {nombre: 'Reloj', precio: 700},
  {nombre: 'Procesador', precio: 800},
  {nombre: 'Motherboard', precio: 900}
];

carrito.forEach(producto=>console.log(producto.nombre));

const nombreProducto = carrito.map(producto=>producto.nombre);

console.log(nombreProducto);

