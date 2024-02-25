describe('Preencher campo de texto', () => {
    it('Visitar o site e preencher campo', () => {
      // Visitar o site
      cy.visit('http://localhost:5173');
  
      cy.get('input')
        .type('asdfghjkç')
        .should('have.value', 'asdfghjkç');
    });
  });
  