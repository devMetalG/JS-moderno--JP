import Citas from '../js/classes/Citas'

describe('Probar clase Citas',() => {
  
  const citas = new Citas()
  const id = Date.now()
  
  test('agregar nueva cita',()=>{
    const citaObj = {
      mascota: 'Morris',
      id,
      propietario: 'Memo',
      telefono: '1111112222',
      fecha: '11-10-2023',
      hora: '15:10',
      sintomas: 'Esta muy guapo'
    }

    citaObj.id = Date.now()
    
    citas.agregarCita(citaObj)

    expect(citas).toMatchSnapshot()
  })

  test('Actualizar Cita', () => {
    const citaActualizada = {
      mascota: 'Euphy',
      id,
      propietario: 'Costal',
      telefono: '1111112222',
      fecha: '11-10-2023',
      hora: '15:10',
      sintomas: 'sindrome del gato paracaidista'
    }

    citas.editarCita(citaActualizada)

    expect(citas).toMatchSnapshot()
  })
  
  test('Eliminar Cita', () => {

    citas.eliminarCita(id)

    expect(citas).toMatchSnapshot()
  })
})