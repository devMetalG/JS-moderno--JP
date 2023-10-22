const container = document.querySelector('.container')
const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')

window.addEventListener('load', ()=> {
  formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e){
  e.preventDefault()

  // Validar
  const ciudad = document.querySelector('#ciudad').value
  const pais = document.querySelector('#pais').value

  // console.log(ciudad)
  // console.log(pais)
  if (ciudad === '' && pais === '') {
    // Error
    mostrarError('Ambos campos son obligatorios')
  }
  // Consultar la API
}

function mostrarError(mensaje){
  const existe = document.querySelector('.bg-red-100')

  if (!existe) {
    // Crear alerta
    const alerta = document.createElement('DIV')
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4',
     'py-3', 'rounded', 'max-w-md', 'mt-6', 'mx-auto', 'text-center')
  
     alerta.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block">${mensaje}</span>
     `
  
     container.appendChild(alerta)

    //  Eliminar alerta 
    setTimeout(() => {
      alerta.remove()
    }, 3000);
  }
}