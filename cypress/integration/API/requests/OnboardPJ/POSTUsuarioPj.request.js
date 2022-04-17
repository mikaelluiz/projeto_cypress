/// <reference types="cypress" />

const payloadUsuarioPj = require('../../payloads/PJ/CriarUsuario.json')

function criarUsuarioPj() {
  //let a = "Bearer " + localStorage.getItem('auth')
  return cy.request({
      method: 'POST',
      url: 'Users',
      headers: {
          accept: "application/json",
         // Authorization: a
      },
      failOnStatusCode: false,
      body: payloadUsuarioPj
  });
};

export { criarUsuarioPj };