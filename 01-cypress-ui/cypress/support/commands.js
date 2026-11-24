Cypress.Commands.add('preencherCadastro', (nome, email, senha) => {
  cy.get('#name').type(nome)
  cy.get('#email').type(email)
  cy.get('#phone').type('11954838741')
  cy.get('#password').type(senha)
  cy.get('#confirm-password').type(senha)
  cy.get('#terms-agreement').check()
})