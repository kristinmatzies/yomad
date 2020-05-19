const testEvent = 'Hamburg' + Math.floor(Math.random() * Math.floor(10))

describe('create and delete an event', () => {
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

/* describe('a new event can not be submitted without all required inputs', () => {
  it('does not submit the form', () => {
    cy.visit('/create')
    cy.get('[data-cy=create_event]')
    cy.get('input[name="city"]').type(testEvent)
    cy.get('input[name="place"]').type('Schanzenpark')
    cy.get('input[name="date"]').type('2020-06-02')
    cy.get('input[name="time"]').type('08:00')
    cy.get('[data-cy=create_event] > [data-cy=submit_button]').click()
  })
}) */
