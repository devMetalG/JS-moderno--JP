// Explicit Binding
function persona(el1, el2){
  console.log(`Mi nombre es: ${this.nombre}, escucho ${el1} y ${el2}`)
}

const info = {
  nombre: 'Memo'
}

const musicaFav = ['Heavy Metal', 'Rock']

persona.call(info, musicaFav[0], musicaFav[1])
persona.apply(info, musicaFav)
const nuevaFn = persona.bind(info, musicaFav[0], musicaFav[1])
nuevaFn()