/// <reference types="cypress" />
const AtualizarUsuarioPj = require('../../payloads/PJ/AtualizarUsuario.json')

function atualizarUsuarioPj(idUser) {
  //let a = "Bearer " + localStorage.getItem('auth')
  return cy.request({
      method: 'PUT',
      url: `Users/${idUser}`,
      headers: {
          accept: "application/json",
         // Authorization: a
      },
      failOnStatusCode: false,
      body: AtualizarUsuarioPj
  });
};

export { atualizarUsuarioPj };