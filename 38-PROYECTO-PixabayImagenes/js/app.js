const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')

window.onload = () => {
  formulario.addEventListener('submit', validarFormulario)
}

function validarFormulario(e){
  e.preventDefault()

  const terminoBusqueda = document.querySelector('#termino').value

  if (terminoBusqueda === '') {
    mostrarAlerta('Agrega un término de búsqueda')
    return
  }
  buscarImgs()
}

function mostrarAlerta(mensaje){

  const existeAlerta = document.querySelector('.flex-error')
  if (!existeAlerta) {   
    const alerta = document.createElement('P')
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4',
    'py-3', 'rounded', 'max-w-lg', 'mt-6', 'text-center', 'flex-error')
  
    alerta.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">${mensaje}</span>
    `
    formulario.appendChild(alerta)
  
    setTimeout(() => {
      alerta.remove()
    }, 3000);
  }
}

function buscarImgs(termino){
  const key = '40281056-3a58b311f8d46a7cb9b988286'
  const url = `https://pixabay.com/api/?key=${key}&q=${termino}`
  fetch(url)
    .then(response => response.json())
    .then(result => mostrarImgs(result.hits))
}

function mostrarImgs(imgs){
  console.log(imgs)
}