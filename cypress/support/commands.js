// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
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
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
  

Cypress.Commands.add('loginTrello',()=>{
    const email ="musab.sh2006@gmail.com";
    const password ="MUSAB@123MUSAB";
    cy.visit("https://trello.com/login");
      
        cy.get("#user").clear().type(email);
        cy.get("#login").first().click();
        cy.wait(3000);
        cy.origin("https://id.atlassian.com/login",()=>{

        cy.get("#password").clear().type("MUSAB@123MUSAB"+"{enter}");
})
        // cy.get("#login-submit").click();
    })

