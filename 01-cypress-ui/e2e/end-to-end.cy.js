import { faker } from '@faker-js/faker'

describe('Fluxo End to End - Hub de Leitura', () => {

  beforeEach(() => {
    cy.visit('/register.html')
  })

  it('Deve cadastrar e realizar login com sucesso', () => {

    let nome = faker.person.fullName()
    let email = faker.internet.email()
    let senha = 'Diego@123'

    // Cadastro
    cy.preencherCadastro(nome, email, senha)
    cy.get('#register-btn').click()

    // Resultado esperado do cadastro
    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', nome)

    // Login
    cy.visit('/login.html')

    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#login-btn').click()

    // Resultado esperado do login
    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', nome)
  })
})