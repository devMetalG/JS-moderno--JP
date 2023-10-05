// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const tweets = [];

// Event Listeners
eventListenerts();
function eventListenerts() {
  formulario.addEventListener('submit', agregarTweet);
}

// Funciones
function agregarTweet(e) {
  e.preventDefault();
  // TextArea donde el usario escribe
  const tweet = document.querySelector('#tweet').value;
  // Validación
  if (tweet === '') {
    mostrarError('Un mensaje no puede ir vacio');

    return;
  }
  console.log('Agregando tweet');
}

// Mostrar mensaje de error
function mostrarError(error){
  const mensajeError = document.createElement('P');
  mensajeError.textContent = error;
  mensajeError.classList.add('error');

  // Insertar en contenido 
  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  // Elimina alerta después de 3s
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}