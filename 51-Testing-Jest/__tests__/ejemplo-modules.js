import { suma } from '../js/funciones2.js'

describe('Suma de 2 numeros', ()=>{
  test('Sumar 10 y 20', () => {
    expect(suma(10, 20)).toBe(30)
  })
})