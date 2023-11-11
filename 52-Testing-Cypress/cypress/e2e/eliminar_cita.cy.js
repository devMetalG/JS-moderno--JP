/// <reference types="cypress"/>

describe('Crea una cita y la elimina', () => {
  it('llena los campos y crea una cita', () => {
    cy.visit('index.html')

    cy.get('[data-cy=mascota]')
      .type('Euphy')

    cy.get('[data-cy=propietario]')
      .type('Costal')

    cy.get('[data-cy=telefono]')
      .type('4771234576')

    cy.get('[data-cy=fecha]')
      .type('2023-11-12')

    cy.get('[data-cy=hora]')
      .type('11:30')

    cy.get('[data-cy=sintomas]')
      .type('Sindrome del gato volador')

    cy.get('[data-cy=submit]')
      .click()
      
    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'Administra tus Citas')

    cy.get('[data-cy=alerta]')
      .invoke('text')
      .should('equal', 'Se agregó correctamente')
    
    cy.get('[data-cy=alerta]')
      .should('have.class', 'alert-success')
  })
  it('Elimina una cita', () => {
    cy.get('[data-cy="btn-eliminar"]')
      .click()
  })
})