// Crear funciones en objetos y acceder a los valores

const producto = {
  nombre: 'Monitor',
  precio: 300,
  disponible: true,
  mostrarDatos: function() {
    console.log(`el producto: ${this.nombre} cuesta: $${this.precio}`)
  }
}
const producto2 = {
  nombre: 'tablet',
  precio: 3001,
  disponible: true,
  mostrarDatos: function() {
    console.log(`el producto: ${this.nombre} cuesta: $${this.precio}`)
  }
}

producto.mostrarDatos();
producto2.mostrarDatos();