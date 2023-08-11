/// <reference types="cypress" />

describe('MyTestSuite', function() 
{
    it('Verify Tilte Of The Page-positve', function() 
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')
    })
    
    it('Verify Tilte Of The Page-Nagitive', function() 
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce store')
    })

  })