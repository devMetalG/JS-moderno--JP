const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: '1Kg',
      altura: '1m'
    },
    fabricacion: {
      pais: 'China'
    }
  }
}

const {nombre, precio, informacion, informacion: {fabricacion: { pais }}} = producto;

console.log(nombre);
console.log(precio);
console.log(informacion);
console.log(pais);