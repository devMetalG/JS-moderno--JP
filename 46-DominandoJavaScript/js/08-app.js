self.onload = () => {
  console.log('Ventana lista.')
}

const producto = {
  nombre: 'El arte de la Guerra',
  precio: 9,
  disponible: true,
  mostrarInfo(){
    const self = this
    return `El libro: ${self.nombre} tiene un precio de $${self.precio}`
  }
}

console.log(producto.mostrarInfo())