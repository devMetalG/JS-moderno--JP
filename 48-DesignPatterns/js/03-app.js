// Singleton

let instancia = null

class Persona {
  constructor(nombre, email){
    if (!instancia) {
      this.nombre = nombre
      this.email = email
      instancia = this
    } else {
      return instancia
    }
  }
}

const persona = new Persona('Memo', 'email@email.com')
console.log(persona)

const persona2 = new Persona('Memo2', 'email@email2.com')
console.log(persona2)