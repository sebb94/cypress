describe('visit', () => {
  it('visit', () => {
    cy.visit('/d/elektronika/fotografia/')
    //yield
    cy.url().then(url => {
      cy.log(`URL ${url}`)
      expect(url).to.contains('/fotografia')
    }) 
  })

  it('title validation', () => {
    cy.title().then(title => {
      cy.log(title)
      expect(title).to.contain('Używane')
      expect(title).to.be.eq('Używane cyfrówki, aparaty cyfrowe, fotograficzne na sprzedaż Ogłoszenia OLX.pl')
    })
  });
})