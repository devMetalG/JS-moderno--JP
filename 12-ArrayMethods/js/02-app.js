const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, index) => {
  if (mes === 'Abril') {
    console.log(`Se encontro ${mes} en el indice: ${index}`)
  }
})

const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

const indiceProducto = carrito.findIndex( producto => producto.nombre === 'Tablet');
console.log(indiceProducto);