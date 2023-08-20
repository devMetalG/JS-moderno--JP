const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true
}
console.log(producto);

// agregar propiedades a un objeto 
producto.cantidad = 10;
console.log(producto);

// Eliminar propiedades de un objeto
delete producto.disponible;