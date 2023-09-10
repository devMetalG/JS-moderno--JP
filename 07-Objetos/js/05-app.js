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

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);