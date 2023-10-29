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
    const {nombre, precio, categoria, id} = platillo
    const row = document.createElement('DIV')
    row.classList.add('row', 'py-3', 'border-top', 'align-items-center')

    const nombrePlatillo = document.createElement('DIV')
    nombrePlatillo.classList.add('col-md-4')
    nombrePlatillo.textContent = nombre
    
    const precioPlatillo = document.createElement('DIV')
    precioPlatillo.classList.add('col-md-3','d-flex', 'align-items-center', 'fw-bold')
    precioPlatillo.textContent = `$${precio}`
    
    const categoriaPlatillo = document.createElement('DIV')
    categoriaPlatillo.classList.add('col-md-3','d-flex', 'align-items-center')
    categoriaPlatillo.textContent = categorias[categoria]

    const inputCantidad = document.createElement('INPUT')
    inputCantidad.type = 'number'
    inputCantidad.min = 0
    inputCantidad.id = `producto-${id}`
    inputCantidad.value = 0
    inputCantidad.classList.add('form-control', 'lh-1')

    const agregar = document.createElement('DIV')
    agregar.classList.add('col-md-2')
    agregar.appendChild(inputCantidad)

    // Funcion detecta cantidad y platillo agregado

    inputCantidad.onchange = function(){
      const cantidad = parseInt(inputCantidad.value)
      agregarPlatillo({...platillo, cantidad})
    }

    row.appendChild(nombrePlatillo)
    row.appendChild(precioPlatillo)
    row.appendChild(categoriaPlatillo)
    row.appendChild(agregar)
    contenido.appendChild(row)
  })
}

function limpiarHTML(selector){
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild)
  }
}

function agregarPlatillo(product){
  const {cantidad, id} = product
  let {pedido} = cliente
  // Revisar cantidad mayor a 0

  if (cantidad > 0) {
    // Comprueba si un elemento ya existe
    if (pedido.some(articulo => articulo.id === id)) {
      // El articulo existe, actualizar cantidad
      const pedidoActualizado = pedido.map(articulo => {
        if (articulo.id === id) {
          articulo.cantidad = cantidad
        }
        return articulo
      })
      // Asigna nuevo array a cliente.pedido
      cliente.pedido = [...pedidoActualizado]
    } else {
      // Si el articulo no existe se agrega al array de pedido
      cliente.pedido = [...pedido, product] 
    }
  } else {
    console.log('No es mayor a 0')
  }

  console.log(cliente.pedido)
}