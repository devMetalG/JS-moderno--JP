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
    mostrarAlerta('Todos los campos son obligatorios')
    return
  } 
  console.log('Campos llenos')
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