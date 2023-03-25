// Asigna el valor de nombre que se capture en el prompt
const nombre = prompt('Cual es tu nombre?');
// Toma el nombre del prompt y lo muestra en pantalla con un inner
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JS moderno`;