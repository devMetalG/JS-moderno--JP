// New binding
function Auto(modelo, color){
  this.modelo = modelo
  this.color = color
}

const auto = new Auto('Mustang', 'Negro')
console.log(auto)

// Window binding
window.color = 'Azul'
function hola(){
  console.log(color)
}

hola()