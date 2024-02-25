// Arquivo: nome-do-arquivo-spec.js

describe('Preencher campo de texto', () => {
  it('Visitar o site e preencher campo', () => {
    // Visitar o site
    cy.visit('http://localhost:5173');

    cy.get('input')
      .type('Harry Potter e a Pedra Filosofal')
      .should('have.value', 'Harry Potter e a Pedra Filosofal');
  });
});
