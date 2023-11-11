/// <reference types="cypress"/>

describe('Crea una cita y la edita', () => {
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

  it('Edita la cita', () => {
    cy.get('[data-cy="btn-editar"]')
      .click()

    cy.get('[data-cy=mascota]')
      .clear()
      .type('Morris')

    cy.get('[data-cy=propietario]')
      .clear()
      .type('Memo')

    cy.get('[data-cy=telefono]')
      .clear()
      .type('4771234577')

    cy.get('[data-cy=fecha]')
      .clear()
      .type('2023-11-13')

    cy.get('[data-cy=hora]')
      .clear()
      .type('11:40')

    cy.get('[data-cy=sintomas]')
      .clear()
      .type('La vida de un critico')

    cy.get('[data-cy=submit]')
      .click()
      
    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'Administra tus Citas')

    cy.get('[data-cy=alerta]')
      .invoke('text')
      .should('equal', 'Guardado Correctamente')

    cy.get('[data-cy=alerta]')
      .should('have.class', 'alert-success')
  })
})