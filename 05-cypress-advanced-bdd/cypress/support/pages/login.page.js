class LoginPage {
  visitar() {
    cy.visit('/login.html')
  }

  preencherEmail(email) {
    cy.get('#email').clear().type(email)
  }

  preencherSenha(senha) {
    cy.get('#password').clear().type(senha, { log: false })
  }

  clicarLogin() {
    cy.get('#login-btn').click()
  }

  validarMensagemErro() {
    cy.contains('Email ou senha incorretos').should('be.visible')
  }
}

export default new LoginPage()
