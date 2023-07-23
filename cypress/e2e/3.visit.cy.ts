describe('visit', () => {

  beforeEach(() => {
    cy.visit('/textinput')
  });
  it('visit', () => {
    //yield
    cy.url().then(url => {
      cy.log(`URL ${url}`)
      expect(url).to.contains('textinput')
    }) 
  })

  it('title validation', () => {
    cy.title().then(title => {
      cy.log(title)
      expect(title).to.contain('Input')
      expect(title).to.be.eq('Text Input')
    })
  });

  it('challenge', () => {
    cy.get('input#newButtonName').type('Hello!')
    cy.get('button#updatingButton')
    .click()
    .should('have.text','Hello!')
  });
})