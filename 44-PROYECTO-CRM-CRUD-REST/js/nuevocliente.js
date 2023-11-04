import { imprimirAlerta, validar } from './funciones.js'
import { nuevoCliente } from './API.js'
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', validarCliente)
  })

  function validarCliente(e){
    e.preventDefault()

    // Leer inputs
    const nombre = document.querySelector('#nombre').value
    const email = document.querySelector('#email').value
    const telefono = document.querySelector('#telefono').value
    const empresa = document.querySelector('#empresa').value
    // Crear un objeto Cliente
    const cliente = {
      nombre,
      email, 
      telefono,
      empresa, 
    }
    if (validar(cliente)) {
      imprimirAlerta('Todos los campos son obligatorios', 'error')
      return
    }
    nuevoCliente(cliente)
  }
})();