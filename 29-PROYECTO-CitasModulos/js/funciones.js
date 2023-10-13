const ui = new UI();
const administrarCitas = new Citas();
let editando;

const citaObj = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: ''
}

export function datosCita(e){
  citaObj[e.target.name] = e.target.value;
}

export function nuevaCita(e){
  e.preventDefault();

  const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

  // validar
  if (mascota === '' || propietario === '' || telefono === ''
   || fecha === '' || hora === '' || sintomas === '' ) {
    ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
    return;
  }

  if (editando) {
    ui.imprimirAlerta('La cita se edito correctamente');

    // Pasar el objeto de la cita a la función de edición
    administrarCitas.editarCita({...citaObj});

    formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
    editando = false;

  } else {
    // Generar un ID unico
    citaObj.id = Date.now();

    // Crear cita
    administrarCitas.agregarCita({...citaObj});

    // Mensaje de agregado correctamente
    ui.imprimirAlerta('La cita se agrego correctamente');

  }
  
  // Reiniciar formulario
  formulario.reset();
  // Reiniciar objeto
  reiniciarObj();

  // Mostrar el HTML
  ui.imprimirCitas(administrarCitas);
}

export function reiniciarObj(){
  citaObj.mascota = '';
  citaObj.propietario = '';
  citaObj.telefono = '';
  citaObj.fecha = '';
  citaObj.hora = '';
  citaObj.sintomas = '';
}

export function eliminarCita(id){
  // Elimina cita
  administrarCitas.eliminarCita(id);
  // Muestra mensaje
  ui.imprimirAlerta('La cita se elimino correctamente');
  // refresca las citas
  ui.imprimirCitas(administrarCitas);
}

// carga datos y modo edición
export function cargarEdicion(cita) {
  const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

  // Llenar inputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  // Llenar el objeto 
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  // Cambiar texto del botón
  formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios';
  editando = true;
}