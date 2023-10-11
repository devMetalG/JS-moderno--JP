// variables
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

const citaObj = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: ''
}

// Clases
class Citas{
  constructor(){
    this.citas = [];
  }
  agregarCita(cita){
    this.citas = [...this.citas, cita];
    console.log(this.citas);
  }
  eliminarCita(id){
    this.citas = this.citas.filter(cita => cita.id !== id);
  }
}

class UI {
  imprimirAlerta(mensaje, tipo) {
    
    const divMensaje = document.createElement('DIV');
    
    divMensaje.classList.add('text-center', 'alert', 'display-block', 'col-12');

    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }
    // Mensaje
    divMensaje.textContent = mensaje;

    // agregar al HTML
    document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

    // Quitar alerta
    setTimeout(() => {
      divMensaje.remove();
    }, 3500);
  }

  imprimirCitas({citas}){
    this.limpiarHTML();
    citas.forEach( cita =>{
      const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
      const divCita = document.createElement('DIV');
      divCita.classList.add('cita', 'p-3');
      divCita.dataset.id = id;

      // Scripting de elementos de la cita
      const mascotaParrafo = document.createElement('H2');
      mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
      mascotaParrafo.textContent = mascota;

      const propietarioParrafo = document.createElement('p');
      propietarioParrafo.innerHTML = `
        <span class="font-weight-bolder">Propietario: </span> ${propietario}
      `;

      const telefonoParrafo = document.createElement('p');
      telefonoParrafo.innerHTML = `
        <span class="font-weight-bolder">Teléfono: </span> ${telefono}
      `;

      const fechaParrafo = document.createElement('p');
      fechaParrafo.innerHTML = `
        <span class="font-weight-bolder">Fecha: </span> ${fecha}
      `;

      const horaParrafo = document.createElement('p');
      horaParrafo.innerHTML = `
        <span class="font-weight-bolder">Hora: </span> ${hora}
      `;

      const sintomasParrafo = document.createElement('p');
      sintomasParrafo.innerHTML = `
        <span class="font-weight-bolder">Síntomas: </span> ${sintomas}
      `;

      // Botón para eliminar la cita
      const btnEliminar = document.createElement('BUTTON');
      btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
      btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" 
      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
      btnEliminar.onclick = () => eliminarCita(id);

      // Agregar parrafos al divCita
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);

      // agregar citas al HTML
      contenedorCitas.appendChild(divCita);
    });
  }

  limpiarHTML(){
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

const ui = new UI();
const administrarCitas = new Citas();
// event Listeners
eventListeners();
function eventListeners() {
  mascotaInput.addEventListener('input', datosCita);
  propietarioInput.addEventListener('input', datosCita);
  telefonoInput.addEventListener('input', datosCita);
  fechaInput.addEventListener('input', datosCita);
  horaInput.addEventListener('input', datosCita);
  sintomasInput.addEventListener('input', datosCita);
  formulario.addEventListener('submit', nuevaCita)
}

// funciones
function datosCita(e){
  citaObj[e.target.name] = e.target.value;
}

function nuevaCita(e){
  e.preventDefault();

  const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

  // validar
  if (mascota === '' || propietario === '' || telefono === ''
   || fecha === '' || hora === '' || sintomas === '' ) {
    ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
    return;
  }
  // Generar un ID unico
  citaObj.id = Date.now();

  // Crear cita
  administrarCitas.agregarCita({...citaObj});
  // Reiniciar formulario
  formulario.reset();
  // Reiniciar objeto
  reiniciarObj();

  // Mostrar el HTML
  ui.imprimirCitas(administrarCitas);
}

function reiniciarObj(){
  citaObj.mascota = '';
  citaObj.propietario = '';
  citaObj.telefono = '';
  citaObj.fecha = '';
  citaObj.hora = '';
  citaObj.sintomas = '';
}

function eliminarCita(id){
  // Elimina cita
  administrarCitas.eliminarCita(id);
  // Muestra mensaje
  ui.imprimirAlerta('La cita se elimino correctamente');
  // refresca las citas
  ui.imprimirCitas(administrarCitas);
}