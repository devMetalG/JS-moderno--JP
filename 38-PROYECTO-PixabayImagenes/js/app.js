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
  buscarImgs(terminoBusqueda)
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
  const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=100`
  fetch(url)
    .then(response => response.json())
    .then(result => mostrarImgs(result.hits))
}

function mostrarImgs(imgs){
  limpiarHTML()

  imgs.forEach(img => {
    const {previewURL, likes, views, largeImageURL} = img

    resultado.innerHTML += `
      <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
        <div class="bg-white">
          <img class="w-full" src="${previewURL}">
          <div class="p-4">
            <p class="font-bold">${likes} <span class="font-light">Me Gusta</span></p>
            <p class="font-bold">${views} <span class="font-light">Vistas</span></p>
            <a
              class=" block w-full bg-blue-800 hover:bg-blue-500 text-white 
              uppercase font-bold text-center rounded mt-5 p-1" 
              href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
            >
              Ver Imagen
            </a>
          </div>
        </div>
      </div>
    `
  })
}

function limpiarHTML(){
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild)
  }
}