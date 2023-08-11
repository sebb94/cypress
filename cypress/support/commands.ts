import "cypress-file-upload";
import "@testing-library/cypress/add-commands";
import "@4tw/cypress-drag-drop";
require("cy-verify-downloads").addCustomCommand();
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      safeLogin(email: string, password: string): Chainable<void>;
      loginapp(email: string, password: string): Chainable<void>;
      login(username: string, password: string): Chainable<void>;
      conduitLogin(username: string, password: string): Chainable<void>;
      getIframe(iframe: any): any;
      clickLink(label: any): any;
      parseXlsx(inputFile: any): any;
    }
  }
}

Cypress.Commands.add('getIframe', (iframe)=>{
  return cy.get(iframe)
  .its('0.contentDocument.body')
  .should('be.visible')
  .then(cy.wrap);
})


//Custom command for Clicking on link using label
Cypress.Commands.add('clickLink', (label) =>{
   cy.get('a').contains(label).click();
})

Cypress.Commands.add("loginapp", (email, password) => {
  cy.get('#Email').clear();
  cy.get('#Email').type(email);
  cy.get('#Password').clear();
  cy.get('#Password').type(password);
  cy.get("button[class='button-1 login-button']").click();
});

Cypress.Commands.add("conduitLogin", function(email,password){
  cy.visit('/')
  cy.contains('Sign in').click()
  cy.get('input[type="email"]').type(email)
  cy.get('input[type="password"]').type(password)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.get("#userName").type(username);
  cy.get("#password").type(password);
  cy.get("#login").click();
});

Cypress.Commands.add("safeLogin", (username: string, password: string) => {
  cy.get("#userName").type(username);
  cy.get("#password").type(password,{log: false});
  cy.get("#login").click();
});

Cypress.Commands.add("parseXlsx", (inputFile) => {
  return cy.task("parseXlsx", { filePath: inputFile });
});
