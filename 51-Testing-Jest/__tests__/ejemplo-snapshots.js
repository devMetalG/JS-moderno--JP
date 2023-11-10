const cliente = {
  nombre: 'Maguito',
  balance:800,
  tipo: 'Premium'
}
describe('test a cliente con snapshots', ()=>{
  test('Es memo',()=>{
    expect(cliente).toMatchSnapshot()
  })
})