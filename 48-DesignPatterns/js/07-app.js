// NameSpace pattern
const restaurantApp = {}

restaurantApp.platillos = [
  {
    platillo: 'Pizza',
    precio: 20
  },
  {
    platillo: 'Hamburguesa',
    precio: 30
  },
  {
    platillo: 'Hot Dog',
    precio: 15
  }
]

restaurantApp.funciones = {
  mostrarMenu: platillos => {
    console.log('Bienvenido al menu')
    platillos.forEach((platillo, index) => {
      console.log(`${index}: ${platillo.platillo} $${platillo.precio}`)
    })
  },
  ordenar: id => {
    console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`)
  },
  agregarPlatillo: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio
    }
    restaurantApp.platillos.push(nuevo)
  }
}
restaurantApp.funciones.ordenar(1)
restaurantApp.funciones.agregarPlatillo('taco', 10)
const {platillos} = restaurantApp
restaurantApp.funciones.mostrarMenu(platillos)