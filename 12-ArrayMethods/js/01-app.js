const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo 

for (let i = 0; i < meses.length; i++) {
  if (meses[i] === 'Abril') {
    console.log('Abril si está en el arreglo')
  }
}

meses.forEach( mes => {
  if (mes === 'Enero') {
    console.log('Enero si existe');
  }
})

const resultado = meses.includes('Enero');
console.log(resultado);

// En un arreglo de objetos se usa .some

const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);

// .some en un arreglo tradicional
const resultado2 = meses.some( mes => mes === 'Marzo');
console.log(resultado2);