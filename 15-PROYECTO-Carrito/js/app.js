// Variables
const carrito = document.querySelector('#carrito');
const contCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarListeners();
function cargarListeners(){
  // cuando agregas un curso con el boton "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso);
}

// Funciones
function agregarCurso(e){
  e.preventDefault();
  if (e.target.classList.contains('agregar-carrito')) {
    console.log(e.target);
  }
}
