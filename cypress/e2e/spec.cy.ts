describe('empty spec', () => {

  before(() => {
    cy.visit('https://example.cypress.io')
  });

  beforeEach(() => {
    cy.log('before each!!')
  });

  afterEach(() => {
    cy.log('after each!!')
  });

  after(() => {
    cy.log('after!!')
  });

  it('test 1', () => {
    expect(1).to.be.equal(1)
    cy.get('[href="https://docs.cypress.io"]').should('be.visible')
  })

  it('test 2', () => {
    expect(2).to.be.equal(2)
    cy.get('[href="https://docs.cypress.io"]').should('be.visible')
  });

  it('test 3', () => {
    expect(3).to.be.equal(3)
    cy.get('[href="https://docs.cypress.io"]').should('be.visible')
  });

  it('test 4', () => {
    expect(4).to.be.equal(4)
    cy.get('[href="https://docs.cypress.io"]').should('be.visible')
  });

})