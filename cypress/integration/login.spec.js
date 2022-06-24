/// <reference types="cypress" />

const faker = require('faker')

describe('Realizando Log In', () => {     

  
  it('verifica o título da página', function () {
    cy.visit(Cypress.env('url'))
    cy.viewport("iphone-5")
     cy.wait(5000)
     cy.title().should('be.equal', 'My Store')
     cy.get('.btn.btn-default.button-search').click()
     cy.title().should('be.equal', 'Search - My Store')
     

    })
  })
  
    

    
    
