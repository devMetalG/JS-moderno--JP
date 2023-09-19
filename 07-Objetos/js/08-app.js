// "use strict";

const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
}

Object.freeze(producto);

producto.nombre = 'Monitor curvo'; // No modifico la propiedad
delete producto.nombre; // No elimino la propiedad
producto.cantidad = 100;  // No agrego la propiedad

console.log(producto);
console.log(Object.isFrozen(producto));