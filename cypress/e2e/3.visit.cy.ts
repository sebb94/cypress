describe('visit', () => {
  it('visit', () => {
    cy.visit('/d/elektronika/fotografia/')
    //yield
    cy.url().then(url => {
      cy.log(`URL ${url}`)
    }) 
  })
})