let cliente = {
  mesa: '',
  hora: '',
  pedido: []
}

const categorias = {
  1: 'Comida',
  2: 'Bebidas',
  3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente')
btnGuardarCliente.addEventListener('click', guardarCliente)

function guardarCliente(){
  const mesa = document.querySelector('#mesa').value
  const hora = document.querySelector('#hora').value

  // Validar campos vacios 
  const camposVacios = [mesa, hora].some(campo => campo ==='')
  if (camposVacios) {
    mostrarAlerta('Todos los campos son obligatorios')
    return
  } 
  // Asignar datos de form a cliente
  cliente = {...cliente, mesa, hora}

  // Ocultar modal
  const modalForm = document.querySelector('#formulario')
  const modalBootstrap = bootstrap.Modal.getInstance(modalForm)
  modalBootstrap.hide()

  mostrarSecciones()

  obtenerPlatillos()
}

function mostrarAlerta(msg){
  const existe = document.querySelector('.invalid-feedback')

  if (!existe) {
    const alerta = document.createElement('DIV')
    alerta.classList.add('invalid-feedback', 'd-block', 'text-center')
    alerta.textContent = msg
  
    document.querySelector('.modal-body form').appendChild(alerta)

    setTimeout(() => {
      alerta.remove()
    }, 3000);
  }
}

function mostrarSecciones(){
  const seccionesOcultas = document.querySelectorAll('.d-none')
  seccionesOcultas.forEach(section => section.classList.remove('d-none'))
}

function obtenerPlatillos(){
  const url = 'http://localhost:4000/platillos'

  fetch(url)
    .then(response => response.json())
    .then(result => mostrarPlatillos(result))
    .catch(error => console.log(error))
}

function mostrarPlatillos(platillos){
  const contenido = document.querySelector('.contenido')
  limpiarHTML(contenido)
  platillos.forEach(platillo => {
    const {nombre, precio, categoria} = platillo
    const row = document.createElement('DIV')
    row.classList.add('row', 'py-3', 'border-top')

    const nombrePlatillo = document.createElement('DIV')
    nombrePlatillo.classList.add('col-md-4')
    nombrePlatillo.textContent = nombre
    
    const precioPlatillo = document.createElement('DIV')
    precioPlatillo.classList.add('col-md-3','d-flex', 'align-items-center', 'fw-bold')
    precioPlatillo.textContent = `$${precio}`
    
    const categoriaPlatillo = document.createElement('DIV')
    categoriaPlatillo.classList.add('col-md-3','d-flex', 'align-items-center')
    categoriaPlatillo.textContent = categorias[categoria]

    row.appendChild(nombrePlatillo)
    row.appendChild(precioPlatillo)
    row.appendChild(categoriaPlatillo)
    contenido.appendChild(row)
  })
}

function limpiarHTML(selector){
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild)
  }
}