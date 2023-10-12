const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa');

carrito.delete('Disco #3');
console.log(carrito.has('Camisa'));
console.log(carrito.size);
// carrito.clear();
carrito.forEach(producto =>{
  console.log(producto);
});
console.log(carrito);

// Del sig arreglo eliminar duplicados

const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);