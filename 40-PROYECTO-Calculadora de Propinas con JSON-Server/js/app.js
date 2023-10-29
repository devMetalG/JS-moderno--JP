let cliente = {
  mesa: '',
  hora: '',
  pedido: []
}

const btnGuardarCliente = document.querySelector('#guardar-cliente')
btnGuardarCliente.addEventListener('click', guardarCliente)

function guardarCliente(){
  const mesa = document.querySelector('#mesa').value
  const hora = document.querySelector('#hora').value

  // Validar campos vacios 
  const camposVacios = [mesa, hora].some(campo => campo ==='')
  if (camposVacios) {
    console.log('Hay campos vacios')
  } else {
    console.log('Campos llenos')
  }
}