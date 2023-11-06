// Implicit bingind

const usuario = {
  nombre: 'Memo',
  edad:24,
  informacion(){
    console.log(`Mi nombre es: ${this.nombre} y mi edad es: ${this.edad}`)
  },
  mascota: {
    nombre: 'Morris',
    edad: 8,
    informacion(){
      console.log(`Mascota: ${this.nombre} de ${this.edad} de edad`)
    }
  }
}

usuario.informacion()
usuario.mascota.informacion()