// Arquivo: nome-do-arquivo-spec.js

describe('Preencher campo de texto', () => {
  it('Visitar o site e preencher campo', () => {
    // Visitar o site
    cy.visit('http://localhost:5173');

    cy.get('input')
      .type('ficção')
      .should('have.value', 'ficção');
  });
});
