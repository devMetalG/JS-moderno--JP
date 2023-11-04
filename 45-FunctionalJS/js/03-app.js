const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500},
  { nombre: 'Televisión 50 Pulgadas', precio: 700},
  { nombre: 'Tablet', precio: 300},
  { nombre: 'Audifonos', precio: 200},
  { nombre: 'Teclado', precio: 50},
  { nombre: 'Celular', precio: 500},
  { nombre: 'Bocinas', precio: 300},
  { nombre: 'Laptop', precio: 800},
]

// Filter
// const resultado = carrito.filter(producto => {
//   return producto.precio > 300
// })

const mayor300 = producto => {
  return producto.precio > 300
}

const resultado = carrito.filter(mayor300)
console.log(resultado)