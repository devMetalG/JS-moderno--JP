import Citas from '../js/classes/Citas'

describe('Probar clase Citas',() => {
  
  const citas = new Citas()
  
  test('agregar nueva cita',()=>{
    const citaObj = {
      mascota: 'Morris',
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
})