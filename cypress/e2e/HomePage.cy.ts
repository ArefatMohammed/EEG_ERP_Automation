describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Testing Next.js Applications with Cypress')
  })
})