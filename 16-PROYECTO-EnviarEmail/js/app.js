document.addEventListener('DOMContentLoaded', function (){

  const email = {
    email: '',
    cc: '',
    asunto: '',
    mensaje: ''
  }

  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector('#email');
  const inputCC = document.querySelector('#emailcc');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario');
  const btnSumbit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector('#spinner');

  // Asignar eventos 
  inputEmail.addEventListener('input', validar);
  inputCC.addEventListener('input', validarCC);
  inputAsunto.addEventListener('input', validar);
  inputMensaje.addEventListener('input', validar);
  formulario.addEventListener('submit', enviarEmail);
  btnReset.addEventListener('click', function(e) {
    e.preventDefault();

    reiniciarform();
  });

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add('flex');
    spinner.classList.remove('hidden');

    setTimeout(() => {
      spinner.classList.remove('flex');
      spinner.classList.add('hidden');

      reiniciarform();

      // Crear una alerta
      const alertaExito = document.createElement('P');
      alertaExito.classList.add(
        'bg-green-500', 
        'text-white', 
        'p-2', 
        'text-center', 
        'rounded-lg', 
        'mt-10', 
        'font-bold', 
        'text-sm' , 
        'uppercase'
      );
      alertaExito.textContent = 'Mensaje Enviado correctamente!';

      formulario.appendChild(alertaExito);

      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validarCC(e) {
    if (e.target.id ==='emailcc' && !validarEmail(e.target.value)) {
      if (e.target.value === '') {
        limpiarAlerta(e.target.parentElement);
        return;
      } else{
        mostrarAlerta('El email no es válido', e.target.parentElement);
        email[e.target.name] = '';
        comprobarEmail();
        return;
      }
      
    }

    limpiarAlerta(e.target.parentElement);

    // Asignar valores 
    email[e.target.name] = e.target.value.trim().toLowerCase();
    
    // Comprobar el objeto email
    comprobarEmail();
  }

  function validar(e) {
    if (e.target.value.trim() === '') {
      mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement );
      email[e.target.name] = '';
      comprobarEmail();
      return;
    } 
    if (e.target.id ==='email' && !validarEmail(e.target.value)) {
      mostrarAlerta('El email no es válido', e.target.parentElement);
      email[e.target.name] = '';
      comprobarEmail();
      return;
    }
    
    limpiarAlerta(e.target.parentElement);

    // Asignar valores 
    email[e.target.name] = e.target.value.trim().toLowerCase();
    
    // Comprobar el objeto email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    
    limpiarAlerta(referencia);

    // Generar un alert 
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2' , 'text-center');

    // Inyectar el error al formulario
    referencia.appendChild(error); 
  }

  function limpiarAlerta (referencia) {
    // Comprueba si ya existe la alerta
    const alerta = referencia.querySelector('.bg-red-600');

    if(alerta){
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    if (inputCC.value !== '') {
      if (Object.values(email).includes('')) {
        if (!validarEmail(email.cc)) {
          btnSumbit.classList.add('opacity-50');
          btnSumbit.disabled = true;
          return;
        }
      } else {
        btnSumbit.classList.remove('opacity-50');
        btnSumbit.disabled = false;
      }

    } else {
      const email2 = [Object.values(email)[0], Object.values(email)[2], Object.values(email)[3]];
    
      if (Object.values(email2).includes('')) {
        btnSumbit.classList.add('opacity-50');
        btnSumbit.disabled = true;
        return;
      } 
      btnSumbit.classList.remove('opacity-50');
      btnSumbit.disabled = false;
    }
    // const email2 = [Object.values(email)[0], Object.values(email)[2], Object.values(email)[3]];
    
    // if (Object.values(email2).includes('')) {
    //   btnSumbit.classList.add('opacity-50');
    //   btnSumbit.disabled = true;
    //   return;
    // } 
    // btnSumbit.classList.remove('opacity-50');
    // btnSumbit.disabled = false;
    
  }
  function reiniciarform() {
    // reiniciar el objeto
  email.email = '';
  email.cc = '';
  email.asunto = '';
  email.mensaje = '';

  formulario.reset();
  comprobarEmail();
  }
  
});

