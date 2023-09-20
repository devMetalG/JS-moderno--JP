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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.log(carrito);
console.table(carrito);
