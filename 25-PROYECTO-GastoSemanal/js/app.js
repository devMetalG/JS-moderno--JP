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

  nuevoGasto(gasto){
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  calcularRestante(){
    const gastado = this.gastos.reduce((total, gasto)=> total + gasto.cantidad, 0);
    this.restante = this.presupuesto - gastado;
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

  agergarGastoLista(gastos){
    // Limpiar HTML
    this.limpiarHTML();

    // Iterar gastos
    gastos.forEach(gasto => {
      const {cantidad, nombre, id} = gasto;
      // Crear LI
      const nuevoGasto = document.createElement('LI');
      nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
      nuevoGasto.dataset.id = id;
      // Agregar HTML gasto
      nuevoGasto.innerHTML = `
        ${nombre} <span class="badge badge-primary badge-pill">$${cantidad}</span>
      `;
      // Boton de borrar gasto
      const btnBorrar = document.createElement('BUTTON');
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
      btnBorrar.innerHTML = 'Borrar &times';
      nuevoGasto.appendChild(btnBorrar);
      // Agregar al HTML
      gastoListado.appendChild(nuevoGasto);
    });
  }
  limpiarHTML(){
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante){
    document.querySelector('#restante').textContent = restante;
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
  const cantidad = Number(document.querySelector('#cantidad').value);

  if (nombre === '' || cantidad === '') {
    ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta('Cantidad no valida', 'error');
    return;
  }

  // Generar un objeto gasto
  const gasto = {nombre, cantidad, id: Date.now()}
  presupuesto.nuevoGasto(gasto);
  // Mensaje de exito
  ui.imprimirAlerta('Gasto agregado correctamente');
  // Imprimir los gastos 
  const {gastos, restante} = presupuesto;
  ui.agergarGastoLista(gastos);
  ui.actualizarRestante(restante);
  // Reiniciar el formulario
  formulario.reset();
}