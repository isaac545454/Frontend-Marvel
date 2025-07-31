describe('Comics Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/comics', {
      failOnStatusCode: false
    })
  })

  it('should display the comics grid', () => {
    cy.get('div[class*="comicsContainer"]').should('be.visible')
    cy.get('div[class*="grid"]').should('be.visible')
    cy.get('a[class*="card"]').should('exist')
  })

  it('should navigate through pagination', () => {
    cy.get('div[class*="pagination"]').should('be.visible')
    cy.get('a[class*="card"]').should('exist')
    cy.get('div[class*="pagination"] button').contains('2').click()
    cy.url().should('include', '?page=2')
    cy.get('div[class*="grid"]').should('be.visible')
  })

  it('should navigate to comic details', () => {
    cy.get('a[class*="card"]').should('exist')
    cy.get('a[class*="card"]').first().click()
    cy.url().should('match', /\/comics\/\d+/)
  })
})