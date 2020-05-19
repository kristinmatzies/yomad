describe('search for events in a city', () => {
  it('displays the correct search result for the entered search term', () => {
    cy.visit('/')
    cy.get('input').click().type('hamburg')
    cy.get('[data-cy=event_city]').contains('Hamburg')
  })

  it('displays all search results when input is cleared', () => {
    cy.get('input').clear()
  })
})
