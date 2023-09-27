for (let i = 0; i <= 10; i++) {
  if (i ==5) {
    console.log('CINCO');
    continue;
  }
  console.log(`Numero: ${i}`);
};

const carrito = [
  {nombre: 'Monitor', precio: 300},
  {nombre: 'Tablet', precio: 400, descuento: true},
  {nombre: 'Celular', precio: 500},
  {nombre: 'Teclado', precio: 600},
  {nombre: 'Reloj', precio: 700},
  {nombre: 'Procesador', precio: 800},
  {nombre: 'Motherboard', precio: 900}
];

for (let j = 0; j < carrito.length; j++) {
  if (carrito[j].descuento) {
  console.log(`El articulo: ${carrito[j].nombre} esta en descuento!!`);
  continue;
    
  }
  console.log(carrito[j].nombre);
}