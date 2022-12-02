describe("Click Challenge", () => {
    beforeEach(() => {
      cy.visit("/click");
    });
    it("class assertions", () => {
      cy.get("#badButton").click().should("have.class", "btn-success");
    });
    it("background assertion", () => {
      cy.get("#badButton")
        .click()
        .should("have.css", "background-color", "rgb(40, 167, 69)");
    });
  });
  
  describe("Hover challenge", () => {
    beforeEach(() => {
      cy.visit("/mouseover");
    });
    it("hover with cypress workaround", () => {
      cy.get(".text-primary").trigger("mouseover");
    });
    it("hover with real hover elements", () => {
      cy.get(".text-primary").realHover();
    });
  });
  
  describe("Dynamic table challenge", () => {
    beforeEach(() => {
      cy.visit("/dynamictable");
    });
    it("Chrome CPU Test", () => {
        cy.contains('span[role="cell"]','Chrome')
        .should('be.visible')
        .parent()
        .find('span[role="cell"]')
        .each(cell =>{
            if(cell.text().includes('%')){
                let chromeCpu = cell.text()
                cy.get('.bg-warning').should('include.text',chromeCpu)
        }
        });
    });
  });