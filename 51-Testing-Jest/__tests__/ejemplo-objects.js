const cliente = {
  nombre: 'Memo',
  balance: 600
}

describe('Testing a un objeto', () => {
  test('Cliente Premium', ()=>{
    expect(cliente.balance).toBeGreaterThan(400)
  })
  test('El cliente es Memo', ()=>{
    expect(cliente.nombre).toBe('Memo')
  })
  test('El cliente no es Costal', ()=>{
    expect(cliente.nombre).not.toBe('Costal')
  })
  test('No tiene menos de 200', ()=>{
    expect(cliente.balance).not.toBeLessThan(200)
  })
})