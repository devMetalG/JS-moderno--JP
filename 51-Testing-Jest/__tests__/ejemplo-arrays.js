const carrito = ['producto1', 'producto2', 'producto3']
describe('Testing a un arreglo', ()=>{
  test('Probar que array tenga 3 elementos', ()=>{
    expect(carrito).toHaveLength(3)
  })
  test('Probar que array no este vacio', ()=>{
    expect(carrito).not.toHaveLength(0)
  })
})