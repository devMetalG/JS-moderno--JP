const criptomonedasSelect = document.querySelector('#criptomonedas')
const monedaSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario')
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
}

function leerValor(e){
  objBusqueda[e.target.name] = e.target.value
  console.log(objBusqueda)
}

function mostrarAlerta(mensaje){
  const resultado = document.querySelector('#resultado')
  const alerta = document.createElement('DIV')
  alerta.classList.add('bg-red-100')
  alerta.textContent = mensaje
  resultado.appendChild(alerta)
  setTimeout(() => {
    alerta.remove()
  }, 3000);
}