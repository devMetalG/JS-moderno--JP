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
  console.log('Agregando tweet');
}