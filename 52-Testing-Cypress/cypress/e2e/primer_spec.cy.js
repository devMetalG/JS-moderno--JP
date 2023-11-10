describe('Carga la pagina principal', () => {
  it('Carga pagina principal', () => {
    cy.visit('index.html')
    cy.contains('h1', 'Administrador de Pacientes de Veterinaria')
    cy.get('h1').should('exist')
  })
})