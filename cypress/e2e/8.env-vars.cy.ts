describe("Envirioment Variables Demo", () => {
    it("Demo", () => {
      cy.log(`ENV1 ${Cypress.env("env1")}`)
      cy.log(`ENV1 ${Cypress.env("env1")}`)
    });
  });
  
