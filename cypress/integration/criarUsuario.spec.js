/// <reference types="cypress" />

const faker = require('faker')

describe('Criando usuário', () => {
    

    it(' criar usuário', function() {
        
        cy.visit(Cypress.env('url')+"?controller=authentication&back=my-account")
        cy.get('#email_create').type(`${faker.random.uuid()}-@hotmail.com`).should('be.visible')
        
        cy.get('.icon-user.left').click()
        cy.wait(15000)
        
        
  
    })  
    it(' preencher formulário de cadastro', function() {
        
        
        cy.get('#id_gender2').dblclick()
        cy.get('#customer_firstname').type('Camila').should('have.value', 'Camila')
        cy.get('#customer_lastname').type('Santos').should('have.value', 'Santos')
        cy.get('#passwd').type('123aa').should('have.value', '123aa')
        cy.get('#days').select('29')
        cy.get('#months').select('November')
        cy.get('#years').select('1987')
        cy.get('#uniform-newsletter').click()
        cy.get('#address1').type('Rua das Rosas, 631').should('have.value', 'Rua das Rosas, 631')
        cy.get('#city').type('Orlando').should('have.value', 'Orlando')
        cy.get('#id_state').select('Florida')
        cy.get('#postcode').type('00012').should('have.value', '00012')
        cy.get('#id_country').select('United States')
        cy.get('#phone_mobile').type('12342134').should('have.value', '12342134')
        cy.get('#submitAccount > span').click()
       
         
         
     })
      
      it(' verificar se o usuario foi cadastrado com sucesso', function() {
      cy.get('a.logout').contains('Sign out')
      
  
      
    })
  })
    
  
  