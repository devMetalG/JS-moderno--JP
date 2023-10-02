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
  const cursoSeleccionado = e.target.parentElement.parentElement;
  if (e.target.classList.contains('agregar-carrito')) {
  }
  leerDatosCurso(cursoSeleccionado);
}

// Lee el contenido del HTML y extrae la info del curso

function leerDatosCurso(curso) {
  console.log(curso);

  // crear un objeto con el contenido del curso actual 
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('.info-card h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }
  console.log(infoCurso);
}