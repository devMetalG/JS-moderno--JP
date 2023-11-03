import { imprimirAlerta } from './funciones.js'
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
    cliente.id = Date.now();
    // crearCliente(cliente);
  }

  function validar(obj){
    return !Object.values(obj).every(input => input !== '')
  }

  // function crearCliente(cliente){
  //   const transaction = DB.transaction(['crm'], 'readwrite');
    
  //   const objectStore = transaction.objectStore('crm');
  //   objectStore.add(cliente);

  //   transaction.onerror = function() {
  //     imprimirAlerta('Hubo un error.', 'error');
  //   }

  //   transaction.oncomplete = function() {
  //     imprimirAlerta('El cliente se agrego correctamente');

  //     setTimeout(() => {
  //       window.location.href = 'index.html';
  //     }, 3000);
  //   }
  // }
})();