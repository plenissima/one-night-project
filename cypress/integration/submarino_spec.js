// They did detect us as script and blocked the access

describe('Pesquisando um item no website Americanas', () => {
    it('Acessar, Digitar e Visualizar', () => {
      cy.visit('https://www.submarino.com.br/')
  
      cy.get('input[name=conteudo]').type('Climatizador{enter}')
    })
  })