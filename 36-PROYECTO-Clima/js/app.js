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

  consultarAPI(ciudad, pais)
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

function consultarAPI(ciudad, pais){
  const appID = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`
  
  spinner()
  
  fetch(url)
    .then(response => response.json())
    .then(result => {
      limpiarHTML()
      // console.log(result)
      if (result.cod === '404') {
        mostrarError('Ciudad no encontrada')
        return
      }

      // Imprime respuesta en el HTML
      mostrarClima(result)
    })
}

function mostrarClima(result){
  const {name, main:{temp, temp_max, temp_min}} = result

  const tempActual = kelvinACentigrados(temp)
  const tempMax = kelvinACentigrados(temp_max)
  const tempMin = kelvinACentigrados(temp_min)
  const actual = document.createElement('p')
  const max = document.createElement('p')
  const min = document.createElement('p')
  const ciudad = document.createElement('p')
  
  ciudad.textContent = `Clima en ${name}`
  ciudad.classList.add('font-bold', 'text-2xl')
  
  actual.innerHTML = `${tempActual} &#8451;`
  actual.classList.add('font-bold', 'text-6xl')
  
  max.innerHTML = `Max: ${tempMax} &#8451;`
  max.classList.add('text-xl')
  
  min.innerHTML = `Min: ${tempMin} &#8451;`
  min.classList.add('text-xl')

  const resultadoDiv = document.createElement('DIV')
  resultadoDiv.classList.add('text-center', 'text-white')
  resultadoDiv.appendChild(actual)
  resultadoDiv.appendChild(ciudad)
  resultadoDiv.appendChild(max)
  resultadoDiv.appendChild(min)

  resultado.appendChild(resultadoDiv)
}

const kelvinACentigrados = grados => Number((grados - 273.15).toFixed(2))


function limpiarHTML(){
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild)
  }
}

function spinner (){

  limpiarHTML()
  const divSpinner = document.createElement('div')
   divSpinner.classList.add('sk-fading-circle')

   divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
   `
   resultado.appendChild(divSpinner)
}