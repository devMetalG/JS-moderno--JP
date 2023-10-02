// Variables
const carrito = document.querySelector('#carrito');
const contCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

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
    leerDatosCurso(cursoSeleccionado);
  }
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

  // Agrega elementos al arreglo del carrito
  articulosCarrito = [...articulosCarrito, infoCurso]
  console.log(articulosCarrito);

  carritoHTML();
}

// muestra el carrito en el html

function carritoHTML() {

  // Limpiar HTML
  limpiarHTML();

  articulosCarrito.forEach( curso =>{
    const {imagen, titulo, precio, cantidad, id} = curso;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <img src = "${imagen}" width= "100">
      </td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
      </td>
    `;
    // Agrega el HTML del carrito en el tbody
    contCarrito.appendChild(row);
  })
}

// Eliminar cursos del tbody

function limpiarHTML() {
  // Forma lenta
  // contCarrito.innerHTML = '';

  while (contCarrito.firstChild) {
    contCarrito.removeChild(contCarrito.firstChild)
  }
}