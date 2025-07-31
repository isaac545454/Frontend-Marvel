describe('Character Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', {
      failOnStatusCode: false
    })
  })

  it('should display the character grid', () => {
    cy.get('div[class*="charactersContainer"]').should('be.visible')
    cy.get('div[class*="charactersGrid"]').should('be.visible')
    cy.get('div[class*="card"]').should('exist')
  })

  it('should navigate through pagination', () => {
    cy.get('div[class*="pagination"]').should('be.visible')
    cy.get('div[class*="card"]').should('exist')
    cy.get('div[class*="pagination"] button').contains('2').click()
    cy.url().should('include', '?page=2')
    cy.get('div[class*="charactersGrid"]').should('be.visible')
  })

  it('should handle character search', () => {
    cy.get('form[class*="searchContainer"]').should('be.visible')
    cy.get('input[class*="searchInput"]').should('be.visible')
    cy.get('input[class*="searchInput"]').type('Spider{enter}')
    cy.url().should('include', '/search')
  })

  it('should navigate to character details', () => {
    cy.get('div[class*="card"]').should('exist')
    cy.get('div[class*="card"]').first().click()
    cy.url().should('match', /\/character\/\d+/)
  })
})