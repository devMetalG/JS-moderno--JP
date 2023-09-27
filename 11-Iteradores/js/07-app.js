const pendientes = ['Estudiar JS', 'Comer', 'Proyecto', 'ver anime'];

const carrito = [
  {nombre: 'Monitor', precio: 300},
  {nombre: 'Tablet', precio: 400},
  {nombre: 'Celular', precio: 500},
  {nombre: 'Teclado', precio: 600},
  {nombre: 'Reloj', precio: 700},
  {nombre: 'Procesador', precio: 800},
  {nombre: 'Motherboard', precio: 900}
];

for (let pendiente of pendientes) {
  console.log(pendiente)
}

for(let producto of carrito){
  console.log(producto.nombre)
}