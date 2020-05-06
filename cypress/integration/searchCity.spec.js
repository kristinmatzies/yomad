describe('Search for events in a city', () => {
  it('displays the correct search result for the entered search term', () => {
    cy.visit('http://localhost:3000')

    cy.get('input').click().type('hamburg')

    cy.get('.event_title').contains('Hamburg')
  })

  it('displays all search results when input is cleared', () => {
    cy.get('input').type('hamburg').clear()

    cy.get('.EventList__Scroller-i0qtcv-0 > :nth-child(10)').should('exist')
  })
})
