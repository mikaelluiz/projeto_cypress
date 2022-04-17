/// <reference types="cypress" />

function buscarUsuarioPj() {
  //let a = "Bearer " + localStorage.getItem('auth')
  return cy.request({
      method: 'GET',
      url: `Users`,
      headers: {
          accept: "application/json",
         // Authorization: a
      },
      failOnStatusCode: false
  });
};

export { buscarUsuarioPj };