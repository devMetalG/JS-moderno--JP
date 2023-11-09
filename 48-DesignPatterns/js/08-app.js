// Mediator pattern
function Vendedor(nombre){
  this.nombre = nombre
  this.sala = null
}

Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(`Articulo: ${articulo}, con un precio incial de: $${precio}`)
  },
  vendido: comprador => {
    console.log(`Vendido a: ${comprador}`)
  }
}

function Comprador(nombre){
  this.nombre = nombre
  this.sala = null
}

Comprador.prototype = {
  oferta: (cantidad, comprador) => {
    console.log(`${comprador}: $${cantidad}`)
  }
}

function Subasta(){
  let compradores = {}
  return {
    registrar: user => {
      compradores[user.nombre] = user
      user.sala = this
    }
  }
}

// crear objetos
const memo = new Comprador('Memo')
const costal = new Comprador('Costal')
const josue = new Vendedor('Vendedor de autos')
const subasta = new Subasta()

// Registrar compradores y vendedores en sala
subasta.registrar(memo)
subasta.registrar(costal)
subasta.registrar(josue)

josue.oferta('Casa nueva', '1,000,000')

costal.oferta('500,000', memo.nombre)
costal.oferta('700,000', costal.nombre)
memo.oferta('1,000,000', memo.nombre)

josue.vendido('Memo')