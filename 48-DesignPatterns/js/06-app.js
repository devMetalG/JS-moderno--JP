// Mixin pattern

class Persona {
  constructor(nombre, email){
    this.nombre = nombre
    this.email = email
  }
}

class Cliente {
  constructor(nombre, email){
    this.nombre = nombre
    this.email = email
  }
}

const funcionesPersona = {
  mostrarInfo(){
    console.log(`Nombre persona: ${this.nombre}, Email: ${this.email}`)
  },
  mostrarNombre(){
    console.log(`Nombre: ${this.nombre}`)
  }
}

// agregar funciones persona a la clase persona 
Object.assign(Persona.prototype, funcionesPersona)
Object.assign(Cliente.prototype, funcionesPersona)
const cliente = new Persona('Memo', 'correo@correo.com')
const cliente2 = new Persona('costal', 'correo@correo2.com')

console.log(cliente)

cliente.mostrarInfo()
cliente.mostrarNombre()

cliente2.mostrarInfo()
cliente2.mostrarNombre()