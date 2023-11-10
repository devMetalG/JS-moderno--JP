/// <reference types="cypress"/>

describe('Carga la pagina principal', () => {
  it('Carga pagina principal', () => {
    cy.visit('index.html')
    // Verifica el elemento y su texto
    cy.contains('[data-cy="project-title"]', 'Administrador de Pacientes de Veterinaria')
    // Verifica que exista
    cy.get('[data-cy="project-title"]').should('exist')
    // Verifica que exista el elemento y contenga un texto especifico
    cy.get('[data-cy="project-title"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria')

    // Verificar el texto de las citas
    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una')
  })
})