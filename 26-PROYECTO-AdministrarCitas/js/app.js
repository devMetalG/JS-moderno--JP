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
}

function reiniciarObj(){
  citaObj.mascota = '';
  citaObj.propietario = '';
  citaObj.telefono = '';
  citaObj.fecha = '';
  citaObj.hora = '';
  citaObj.sintomas = '';
}