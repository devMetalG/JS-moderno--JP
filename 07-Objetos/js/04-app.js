const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true
}

// Antes 
// let nombre = producto.nombre;
// console.log(nombre);

// Ahora 
// Destructuring de Objetos
let { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

// Cambiar nombre a variables en destructuring
let { nombre:nombreProducto, precio:precioProducto} = producto;
console.log(nombreProducto);
console.log(precioProducto);