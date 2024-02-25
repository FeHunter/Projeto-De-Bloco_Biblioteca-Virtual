describe('Verificar conexão com API JSON', () => {
    it('Deve verificar a conexão com a API', () => {
      cy.request('https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json')  // Substitua pela URL da sua API
        .should((response) => {
          expect(response.status).to.eq(200);  // Verifica se o código de status é 200 OK
          expect(response.body).to.not.be.null;  // Verifica se o corpo da resposta não está vazio
          // Adicione mais verificações conforme necessário com base na estrutura da resposta JSON
        });
    });
  });
  