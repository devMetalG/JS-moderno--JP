for(let i = 0; i <= 10; i++){
  console.log(`Numero: ${i}`);
};

for (let j = 1; j <= 20; j++) {
  
  if (j%2 == 0) {
    console.log(`Numero: ${j} es par`);
  } else {
    console.log(`Numero: ${j} es impar`);
  }
};

const carrito = [
  {nombre: 'Monitor', precio: 300},
  {nombre: 'Tablet', precio: 400},
  {nombre: 'Celular', precio: 500},
  {nombre: 'Teclado', precio: 600},
  {nombre: 'Reloj', precio: 700},
  {nombre: 'Procesador', precio: 800},
  {nombre: 'Motherboard', precio: 900}
];
for (let k = 0; k < carrito.length; k++) {
  console.log(carrito[k].nombre);
}