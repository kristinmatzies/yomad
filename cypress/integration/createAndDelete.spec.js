const testUser = 'Maxi' + Math.floor(Math.random() * Math.floor(10))
const testEvent = 'Hamburg' + Math.floor(Math.random() * Math.floor(10))

beforeEach(() => {
  cy.restoreLocalStorage()
})

afterEach(() => {
  cy.saveLocalStorage()
})

describe('create a profile', () => {
  it('submits the form correctly when inputs are filled', () => {
    cy.visit('/createprofile')
    cy.get('input[name="name"]').type(testUser)
    cy.get('input[name="city"]').type('Hamburg')
    cy.get('input[name="yogalevel"]').type('Beginner')
    cy.get('[data-cy=create_profil]').submit()
  })

  it('a profile is added', () => {
    cy.visit('/profile')
    cy.contains(testUser).should('exist')
  })
})

describe('create an event', () => {
  it('submits the form correctly when inputs are filled', () => {
    cy.visit('/create')
    cy.get('input[name="city"]').type(testEvent)
    cy.get('input[name="place"]').type('Schanzenpark')
    cy.get('input[name="date"]').type('2020-04-01')
    cy.get('input[name="time"]').type('08:00')
    cy.get('input[name="yogastyle"]').type('Vinyasa')
    cy.get('[data-cy=create_event]').submit()
  })

  it('a new event is added', () => {
    cy.visit('/')
    cy.contains(testEvent).should('exist')
  })
})

describe('delete profile', () => {
  it('deletes the profile with the related event correctly', () => {
    cy.visit('/profile')
    cy.get('[data-cy=delete_profile]').click()
    cy.get(':nth-child(2) > .swal-button').click()
    cy.get('.swal-button').click()
    cy.contains(testEvent).should('not.exist')
  })
})
