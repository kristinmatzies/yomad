describe('last added event should automatically be on page /saved', () => {
  it('saves the newly added event to saved', () => {
    cy.visit('/saved')
    cy.get(
      ':nth-child(1) > [data-cy=eventtext] > [data-cy=save_button]'
    ).should('exist')
  })
})

describe('last added event should not be on /saved page when false', () => {
  it('deletes the newly added event from saved when clicked', () => {
    cy.visit('/')
    cy.get(
      ':nth-child(1) > [data-cy=eventtext] > [data-cy=save_button]'
    ).click()
    cy.visit('/saved')
    cy.get(
      ':nth-child(1) > [data-cy=eventtext] > [data-cy=save_button]'
    ).should('not.exist')
  })
})
