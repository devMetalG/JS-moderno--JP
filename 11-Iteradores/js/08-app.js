const carro = {
  modelo: 'Camaro',
  anyo: 1969,
  motor: '6.0'
}

for (let propiedad in carro){
  console.log(`${carro[propiedad]}`)
}

for(let [llave, valor] of Object.entries(carro)){
  console.log(llave)
  console.log(valor)
}