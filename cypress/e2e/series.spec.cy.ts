describe('Series Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/series', {
      failOnStatusCode: false
    })
  })

  it('should display the series grid', () => {
    cy.get('div[class*="seriesContainer"]').should('be.visible')
    cy.get('div[class*="grid"]').should('be.visible')
    cy.get('div[class*="card"]').should('exist')
  })

  it('should navigate through pagination', () => {
    cy.get('div[class*="pagination"]').should('be.visible')
    cy.get('div[class*="card"]').should('exist')
    cy.get('div[class*="pagination"] button').contains('2').click()
    cy.url().should('include', '?page=2')
    cy.get('div[class*="grid"]').should('be.visible')
  })

  it('should navigate to series details', () => {
    cy.get('div[class*="grid"]').within(() => {
      cy.get('a[class*="link"]').first().click()
    })
    cy.url().should('include', '/series/')
  })

  it('should display series information', () => {
    cy.get('div[class*="card"]').should('exist')
    cy.get('h3[class*="title"]').should('be.visible')
    cy.get('div[class*="imageContainer"]').should('be.visible')
  })
})