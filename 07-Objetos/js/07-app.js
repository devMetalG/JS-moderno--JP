const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
}

// Aunque el objeto producto este declarado como 
// constante, las propiedades del objeto pueden 
// ser modificadas y no generá ningún error.

producto.disponible = false;

console.log(producto);