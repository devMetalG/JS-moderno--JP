const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true
}
console.log('');
console.log('Imprimir el objeto');
console.log(producto);
console.log('');

console.log('Acceder a las propiedades');

console.log('');
// Acceder mediante sintaxis de punto 
console.log('sintaxis .');
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);
console.log('');

// Acceder mediante sintaxis de corchete 
console.log('sintaxis []');
console.log(producto['nombre']);
console.log(producto['precio']);
console.log(producto['disponible']);
console.log('');