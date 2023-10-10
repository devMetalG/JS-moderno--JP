// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');
// Eventos
eventListeners();
function eventListeners(){
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
  formulario.addEventListener('submit', agregarGasto);
}
// Classes
class Presupuesto {
 constructor(presupuesto){
  this.presupuesto = Number(presupuesto);
  this.restante = Number(presupuesto);
  this.gastos = [];
 }
}

class UI {
  insertarPresupuesto(cantidad){
    const {presupuesto, restante} = cantidad;
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }
  imprimirAlerta(mensaje, tipo){
    const divMensaje = document.createElement('DIV');
    divMensaje.classList.add('text-center', 'alert');

    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }
    // Mensaje error
    divMensaje.textContent = mensaje;
    document.querySelector('.primario').insertBefore(divMensaje, formulario);

    // Quitar del HTML
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

// Instanciar 
const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto(){
  const presupuestoUsuario = prompt('¿Cúal es tu presupuesto?');
  console.log(Number(presupuestoUsuario));
  if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) 
  || presupuestoUsuario <= 0) {
    window.location.reload();
  }
  // Presupuesto valido
  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);
  ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
  e.preventDefault();

  const nombre = document.querySelector('#gasto').value;
  const cantidad = document.querySelector('#cantidad').value;

  if (nombre === '' || cantidad === '') {
    ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta('Cantidad no valida', 'error');
    return;
  }
}