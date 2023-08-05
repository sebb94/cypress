describe("Mobile viewport", () => {
    it("Test", () => {
      cy.visit(Cypress.env("angular"))
      cy.viewport('iphone-7')
      cy.get('#mobile_menu_toggler').should('be.visible')
    });
  });
  