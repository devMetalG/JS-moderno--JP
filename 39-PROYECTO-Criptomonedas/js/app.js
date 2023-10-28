const criptomonedasSelect = document.querySelector('#criptomonedas')
const monedaSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')

const objBusqueda = {
  moneda: '',
  criptomoneda: ''
}

const obtenerCripo = criptomonedas => new Promise( resolve => {
  resolve(criptomonedas)
})

document.addEventListener('DOMContentLoaded', () => {
  consultarCripto()

  formulario.addEventListener('submit', enviarFormulario)
  criptomonedasSelect.addEventListener('change', leerValor)
  monedaSelect.addEventListener('change', leerValor)
})

function consultarCripto(){
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
  fetch(url)
    .then(response => response.json())
    .then(result => obtenerCripo(result.Data))
    .then(criptomonedas => selectCripto(criptomonedas))
}

function selectCripto(criptomonedas){
  criptomonedas.forEach(cripto => {
    const {FullName, Name} = cripto.CoinInfo

    const option = document.createElement('OPTION')
    option.value = Name
    option.textContent = FullName
    criptomonedasSelect.appendChild(option)
  });
}

function enviarFormulario(e){
  e.preventDefault()
  // validar formulario
  const {moneda, criptomoneda} = objBusqueda

  if (moneda === '' || criptomoneda ==='') {
    mostrarAlerta('Ambos campos son obligatorios')
    return
  }

  consultarAPI()
}

function leerValor(e){
  objBusqueda[e.target.name] = e.target.value
}

function mostrarAlerta(mensaje){
  const existeError = document.querySelector('.error')

  if (!existeError) {
    const alerta = document.createElement('DIV')
    alerta.classList.add('error')
    alerta.textContent = mensaje
    formulario.appendChild(alerta)
    setTimeout(() => {
      alerta.remove()
    }, 3000);
  }
}

function consultarAPI(){
  const {criptomoneda, moneda} = objBusqueda

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

  fetch(url)
    .then(response => response.json())
    .then(result => mostrarCotizacion(result.DISPLAY[criptomoneda][moneda]))
}

function mostrarCotizacion(cotizacion){
  limpiarHTML(resultado)
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion

  const precio = document.createElement('P')
  precio.classList.add('precio')
  precio.innerHTML = `
    El precio es: <span>${PRICE}</span>
  `
  
  const precioAlto = document.createElement('P')
  precioAlto.innerHTML = `
    El precio más alto del día es: <span>${HIGHDAY}</span>
  `
  
  const precioBajo = document.createElement('P')
  precioBajo.innerHTML = `
    El precio más bajo del día es: <span>${LOWDAY}</span>
  `
  
  const ultimasHoras = document.createElement('P')
  ultimasHoras.innerHTML = `
    Variación últimas 24H: <span>${CHANGEPCT24HOUR}%</span>
  `
  
  const ultimaActualizacion = document.createElement('P')
  ultimaActualizacion.innerHTML = `
    Última actualización: <span>${LASTUPDATE}</span>
  `
  resultado.appendChild(precio)
  resultado.appendChild(precioAlto)
  resultado.appendChild(precioBajo)
  resultado.appendChild(ultimasHoras)
  resultado.appendChild(ultimaActualizacion)
}

function limpiarHTML(selector){
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild)
  }
}