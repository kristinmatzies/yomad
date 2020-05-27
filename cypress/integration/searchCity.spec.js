describe('search for events in a city', () => {
  it('displays the correct search result for the entered search term', () => {
    cy.visit('/')
    cy.get('input').click().type('hamburg')
    cy.get('[data-cy=event_city]').contains('Hamburg')
    cy.get('input').clear()
    cy.get('input').click().type('Colog')
    cy.get('[data-cy=event_city]').contains('Cologne')
  })
})
