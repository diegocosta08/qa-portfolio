import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../support/pages/login.page'
import DashboardPage from '../../support/pages/dashboard.page'
import { mockLoginComSucesso, mockLoginComErro } from '../../support/actions/auth.actions'

Given('que acesso a página de login para autenticação mockada', () => {
  LoginPage.visitar()
})

When('envio credenciais válidas com intercept de sucesso', () => {
  mockLoginComSucesso()

  cy.fixture('usuario').then((usuario) => {
    LoginPage.preencherEmail(usuario.emailValido)
    LoginPage.preencherSenha(usuario.senhaValida)
    LoginPage.clicarLogin()
  })
})

Then('devo ser direcionado ao dashboard com resposta mockada', () => {
  cy.wait('@postLoginSucesso')
  DashboardPage.validarDashboard()
})

When('envio credenciais inválidas com intercept de erro', () => {
  mockLoginComErro()

  cy.fixture('usuario').then((usuario) => {
    LoginPage.preencherEmail(usuario.emailInvalido)
    LoginPage.preencherSenha(usuario.senhaInvalida)
    LoginPage.clicarLogin()
  })
})

Then('devo visualizar a mensagem de erro retornada pela API mockada', () => {
  cy.wait('@postLoginErro')
  LoginPage.validarMensagemErro()
})
