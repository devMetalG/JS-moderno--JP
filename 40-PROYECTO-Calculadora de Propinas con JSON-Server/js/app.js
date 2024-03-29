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
    // Eliminar elementos cuando cantidad es 0 
    const resultado = pedido.filter(articulo => articulo.id !== id)
    cliente.pedido = [...resultado]
  }

  if (cliente.pedido.length) {
    // Mostrar resumen
    actualizarResumen()
  } else{
    const contenido = document.querySelector('#resumen .contenido')
    limpiarHTML(contenido)
    mensajePedidoVacio()
  }
}

function actualizarResumen(){
  const contenido = document.querySelector('#resumen .contenido')
  limpiarHTML(contenido)

  const resumen = document.createElement('DIV')
  resumen.classList.add('col-md-6', 'card', 'py-1', 'px-3', 'shadow')
  
  const mesa = document.createElement('P')
  mesa.textContent = 'Mesa: '
  mesa.classList.add('fw-bold')
  
  const mesaSpan = document.createElement('SPAN')
  mesaSpan.textContent = cliente.mesa
  mesaSpan.classList.add('fw-normal')
  mesa.appendChild(mesaSpan)
  
  const hora = document.createElement('P')
  hora.textContent = 'Hora: '
  hora.classList.add('fw-bold')
  
  const horaSpan = document.createElement('SPAN')
  horaSpan.textContent = cliente.hora
  horaSpan.classList.add('fw-normal')
  hora.appendChild(horaSpan)

  const heading = document.createElement('H3')
  heading.textContent = 'Platillos consumidos'
  heading.classList.add('my-4', 'text-center')

  // Iterar array de pedidos
  const grupo = document.createElement('UL')
  grupo.classList.add('list-group')
  const {pedido} = cliente
  pedido.forEach(articulo => {
    const {nombre, cantidad, precio, id} = articulo

    const lista = document.createElement('LI')
    lista.classList.add('list-group-item')

    const nombreArticulo = document.createElement('H4')
    nombreArticulo.classList.add('my-4')
    nombreArticulo.textContent = nombre

    const cantidadArticulo = document.createElement('P')
    cantidadArticulo.classList.add('fw-bold')
    cantidadArticulo.textContent = 'Cantidad: '

    const cantidadValor = document.createElement('SPAN')
    cantidadValor.classList.add('fw-normal')
    cantidadValor.textContent = cantidad

    cantidadArticulo.appendChild(cantidadValor)
    
    const precioArticulo = document.createElement('P')
    precioArticulo.classList.add('fw-bold')
    precioArticulo.textContent = 'Precio: $'

    const precioValor = document.createElement('SPAN')
    precioValor.classList.add('fw-normal')
    precioValor.textContent = precio
    
    precioArticulo.appendChild(precioValor)
    
    const subtotalArticulo = document.createElement('P')
    subtotalArticulo.classList.add('fw-bold')
    subtotalArticulo.textContent = 'Subtotal: $'

    const subtotalValor = document.createElement('SPAN')
    subtotalValor.classList.add('fw-normal')
    subtotalValor.textContent = calcularSubtotal(precio, cantidad)

    subtotalArticulo.appendChild(subtotalValor)

    const btnEliminar = document.createElement('BUTTON')
    btnEliminar.classList.add('btn', 'btn-danger')
    btnEliminar.textContent = 'Eliminar del Pedido'
    btnEliminar.onclick = function(){
      eliminarProducto(id)
    }

    // Agregar elementos al LI
    lista.appendChild(nombreArticulo)
    lista.appendChild(cantidadArticulo)
    lista.appendChild(precioArticulo)
    lista.appendChild(subtotalArticulo)
    lista.appendChild(btnEliminar)

    // Agregar lista al grupo principal
    grupo.appendChild(lista)
  })

  resumen.appendChild(heading)
  resumen.appendChild(mesa)
  resumen.appendChild(hora)
  resumen.appendChild(grupo)

  contenido.appendChild(resumen)

  formPropinas()
}

function calcularSubtotal(precio, cantidad){
  return precio * cantidad
}

function eliminarProducto(id){
  const contenido = document.querySelector('#resumen .contenido')
  const {pedido} = cliente
  const resultado = pedido.filter(articulo => articulo.id !== id)
  cliente.pedido = [...resultado]

  if (cliente.pedido.length) {
    // Mostrar resumen
    actualizarResumen()
  } else{
    limpiarHTML(contenido)
    mensajePedidoVacio()
  }

  // Regresar inputs a 0
  const productoEliminado = `#producto-${id}`
  const inputEliminado = document.querySelector(productoEliminado)
  inputEliminado.value = 0
}

function mensajePedidoVacio(){
  const contenido = document.querySelector('#resumen .contenido')
  const texto = document.createElement('P')
  texto.classList.add('text-center')
  texto.textContent = 'Añade los elementos del pedido'

  contenido.appendChild(texto)
}

function formPropinas(){
  const contenido = document.querySelector("#resumen .contenido")

  
  const divFormulario = document.createElement('DIV')
  divFormulario.classList.add('col-md-6', 'formulario')
  
  const formulario = document.createElement('DIV')
  formulario.classList.add('card', 'py-1', 'px-3', 'shadow', 'card')
  
  const heading = document.createElement('H3')
  heading.classList.add('my-4', 'text-center')
  heading.textContent = 'Propina'

  // Radio 10%
  const radio10 = document.createElement('INPUT')
  radio10.type = 'radio'
  radio10.name = 'propina'
  radio10.value = "10"
  radio10.classList.add('form-check-input')
  radio10.onclick = calcularPropina

  const radio10Label = document.createElement('LABEL')
  radio10Label.textContent = '10%'
  radio10Label.classList.add('form-check-label')

  const radio10Div = document.createElement('DIV')
  radio10Div.classList.add('form-check')

  radio10Div.appendChild(radio10)
  radio10Div.appendChild(radio10Label)
  
  // Radio 25%
  const radio25 = document.createElement('INPUT')
  radio25.type = 'radio'
  radio25.name = 'propina'
  radio25.value = "25"
  radio25.classList.add('form-check-input')
  radio25.onclick = calcularPropina

  const radio25Label = document.createElement('LABEL')
  radio25Label.textContent = '25%'
  radio25Label.classList.add('form-check-label')

  const radio25Div = document.createElement('DIV')
  radio25Div.classList.add('form-check')

  radio25Div.appendChild(radio25)
  radio25Div.appendChild(radio25Label)
  
  // Radio 50%
  const radio50 = document.createElement('INPUT')
  radio50.type = 'radio'
  radio50.name = 'propina'
  radio50.value = "50"
  radio50.classList.add('form-check-input')
  radio50.onclick = calcularPropina

  const radio50Label = document.createElement('LABEL')
  radio50Label.textContent = '50%'
  radio50Label.classList.add('form-check-label')

  const radio50Div = document.createElement('DIV')
  radio50Div.classList.add('form-check')

  radio50Div.appendChild(radio50)
  radio50Div.appendChild(radio50Label)

  formulario.appendChild(heading)
  formulario.appendChild(radio10Div)
  formulario.appendChild(radio25Div)
  formulario.appendChild(radio50Div)

  divFormulario.appendChild(formulario)

  contenido.appendChild(divFormulario)
}

function calcularPropina(){
  let subtotal = 0
  const {pedido} = cliente
  pedido.forEach(articulo => {
    subtotal += articulo.cantidad * articulo.precio
  })
  const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value

  const propina = ((subtotal * parseInt(propinaSeleccionada))/100)

  const total = subtotal + propina

  mostrarTotal(subtotal, total, propina)
}

function mostrarTotal(subtotal, total, propina){

  const divTotales = document.createElement('DIV')
  divTotales.classList.add('total-pagar')

  // Subtotal 
  const subtotalParrafo = document.createElement('P')
  subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2')
  subtotalParrafo.textContent = 'Subtotal: $'

  const subtotalSpan = document.createElement('SPAN')
  subtotalSpan.classList.add('fw-normal')
  subtotalSpan.textContent = subtotal

  subtotalParrafo.appendChild(subtotalSpan)
 
  // Propina 
  const propinaParrafo = document.createElement('P')
  propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2')
  propinaParrafo.textContent = 'Propina: $'

  const propinaSpan = document.createElement('SPAN')
  propinaSpan.classList.add('fw-normal')
  propinaSpan.textContent = propina

  propinaParrafo.appendChild(propinaSpan)
  
  // Total 
  const totalParrafo = document.createElement('P')
  totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2')
  totalParrafo.textContent = 'Total: $'

  const totalSpan = document.createElement('SPAN')
  totalSpan.classList.add('fw-normal')
  totalSpan.textContent = total

  totalParrafo.appendChild(totalSpan)

  divTotales.appendChild(subtotalParrafo)
  divTotales.appendChild(propinaParrafo)
  divTotales.appendChild(totalParrafo)

  const totalPagarDiv = document.querySelector('.total-pagar')
  if (totalPagarDiv) {
    totalPagarDiv.remove()
  }
  const divFormulario = document.querySelector('.formulario > div') 
  divFormulario.appendChild(divTotales)
}