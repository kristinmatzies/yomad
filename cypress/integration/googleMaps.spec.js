describe('navigates to Google Maps', () => {
  it('navigates to the home page by clicking on the logo', () => {
    cy.visit('/')
    cy.get(
      ':nth-child(1) > [data-cy=eventtext] > :nth-child(4) > [data-cy=google_link]'
    ).then(function ($a) {
      const href = $a.prop('href')
      cy.request(href).its('body').should('include', 'content="Google Maps"')
    })
  })
})
