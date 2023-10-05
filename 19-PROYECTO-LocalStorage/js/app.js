// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

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
  const tweetObj = {
    id: Date.now(),
    tweet // tweet: tweet
  }

  // Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];

  // Crear HTML
  crearHTML();

  // Reiniciar Formulario
  formulario.reset();
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

// Muestra listado de los tweets
function crearHTML(){
  
  limpiarHTML();

  if (tweets.length>0) {
    tweets.forEach( tweet =>{
      // Crear HTML
      const li = document.createElement('LI');
      li.innerText = tweet.tweet;

      // Insertar en HTML
      listaTweets.appendChild(li);
    })
  }
}

// Limpiar HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}