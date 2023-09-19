// Object Literal
const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
}

// Object Constructor
function Producto (nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true
}

const producto2 = new Producto('Teclado', 500);
const producto3 = new Producto('Tarjeta grafica', 6000);

console.log(producto);
console.log(producto2);
console.log(producto3);