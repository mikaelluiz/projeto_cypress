/// <reference types="cypress" />

function deletarUsuarioPj(idUser) {
  //let a = "Bearer " + localStorage.getItem('auth')
  return cy.request({
      method: 'DELETE',
      url: `Users/${idUser}`,
      headers: {
          accept: "application/json",
         // Authorization: a
      },
      failOnStatusCode: false
  });
};

export { deletarUsuarioPj };