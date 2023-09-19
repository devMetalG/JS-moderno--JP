// "use strict";

const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
}

Object.seal(producto);

producto.nombre = 'Monitor curvo'; // Si modifico la propiedad
delete producto.nombre; // No elimino la propiedad
producto.cantidad = 100;  // No agrego la propiedad

console.log(producto);
console.log(producto.nombre);
console.log(Object.isSealed(producto));
console.log(Object.isFrozen(producto));