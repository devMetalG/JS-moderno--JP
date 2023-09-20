const carrito = [];

const producto = {
  nombre: 'Monitor',
  precio: 300
};

function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
}

const producto2 = new Producto('Celular', 1000);
const producto3 = new Producto('Tablet', 1200);
const producto4 = new Producto('Teclado', 800);

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.unshift(producto4);

console.log(carrito);
console.table(carrito);


// Eliminar último elemento de un arreglo

// carrito.pop();

// console.log(carrito);
// console.table(carrito);

// Eliminar del inicio del arreglo

//  carrito.shift();

// console.log(carrito);
// console.table(carrito);

// Eliminar con splice

carrito.splice(2, 1);

console.log(carrito);
console.table(carrito);