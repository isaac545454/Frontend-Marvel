describe('Favorites Page', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit('http://localhost:3000/character/1009351', {
      failOnStatusCode: false
    })
  })

  it('should add character to favorites', () => {
    cy.get('button[class*="favoriteButton"]').click()
    cy.visit('http://localhost:3000/favorites')
    cy.get('div[class*="grid"]').should('be.visible')
    cy.get('a[class*="card"]').should('exist')
    cy.get('h2[class*="characterName"]').should('be.visible')
  })

  it('should show empty message when no favorites', () => {
    cy.visit('http://localhost:3000/favorites')
    cy.get('p[class*="emptyMessage"]').should('be.visible')
    cy.get('p[class*="emptyMessage"]').should('contain', 'You haven\'t added any characters to your favorites yet')
  })

  it('should remove character from favorites', () => {
    cy.get('button[class*="favoriteButton"]').click()
    cy.get('button[class*="favoriteButton"]').click()
    cy.visit('http://localhost:3000/favorites')
    cy.get('p[class*="emptyMessage"]').should('be.visible')
  })

  it('should navigate to character details from favorites', () => {
    cy.get('button[class*="favoriteButton"]').click()
    cy.visit('http://localhost:3000/favorites')
    cy.get('a[class*="card"]').first().click()
    cy.url().should('include', '/character/')
  })

  it('should persist favorites after page reload', () => {
    cy.get('button[class*="favoriteButton"]').click()
    cy.reload()
    cy.get('button[class*="favoriteButton"] svg').should('have.attr', 'fill', 'red')
  })
})