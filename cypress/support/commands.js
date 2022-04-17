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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/*import "cypress-localstorage-commands"
Cypress.Commands.add("getToken", () => {
    cy.request({
        method: 'POST',
        url: '',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json'    
        },
        body: {      
            "teste":"testando"
        }
    })
    .then((response) =>{
        const tokenAuth = response.body.access_token;
        window.localStorage.setItem('auth', tokenAuth);
    })
})*/