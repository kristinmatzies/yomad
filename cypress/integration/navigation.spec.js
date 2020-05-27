describe('footer navigates to the correct url', () => {
  it('navigates to the correct url by clicking on the icon', () => {
    cy.visit('/')
    cy.get('[data-cy=saved_icon]').click()
    cy.url().should('include', '/saved')
  })
})

describe('header navigates to the correct url', () => {
  it('navigates to the profile by clicking on the icon', () => {
    cy.visit('/')
    cy.get('[data-cy=profile_icon]').click()
    cy.url().should('include', '/profile')
  })
})

describe('navigates correctly to a link', () => {
  it('navigates to the create profile page by clicking on the link', () => {
    cy.get('[data-cy=create_profile_link]').click()
    cy.url().should('include', '/createprofile')
  })
})

describe('navigates back to home', () => {
  it('navigates to the home page by clicking on the logo', () => {
    cy.get('[data-cy=logo]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
