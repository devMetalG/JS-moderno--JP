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

  // Elimina cursos del carrito 
  carrito.addEventListener('click', eliminarCurso);
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
  // console.log(curso);

  // crear un objeto con el contenido del curso actual 
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('.info-card h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }
  // console.log(infoCurso);

  // Revisa si un elemento ya existe 
  const existe = articulosCarrito.some( curso=> curso.id === infoCurso.id);
  if (existe) {
    // Actualizamos cantidad
    const cursos = articulosCarrito.map(curso => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // Retorna objeto actualizado
      } else {
        return curso; // Retorna los objetos que no son duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    // Agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
    // console.log(articulosCarrito);
  }

  

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

// Eliminar curso del carrito 
function eliminarCurso(e){
  if (e.target.classList.contains('borrar-curso')) {
    const cursoId = e.target.getAttribute('data-id');

    // Elimina del carrito por data Id
    articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
    carritoHTML(); // Volvemos a iterar sobre el carrito
  }
}