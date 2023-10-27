const criptomonedasSelect = document.querySelector('#criptomonedas')
const obtenerCripo = criptomonedas => new Promise( resolve => {
  resolve(criptomonedas)
})

document.addEventListener('DOMContentLoaded', () => {
  consultarCripto()
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