import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../support/pages/login.page'
import DashboardPage from '../../support/pages/dashboard.page'

Given('que estou na página de login', () => {
  LoginPage.visitar()
})

When('informo um email e uma senha válidos', () => {
  cy.fixture('usuario').then((usuario) => {
    LoginPage.preencherEmail(usuario.emailValido)
    LoginPage.preencherSenha(usuario.senhaValida)
  })
})

When('informo um email e uma senha inválidos', () => {
  cy.fixture('usuario').then((usuario) => {
    LoginPage.preencherEmail(usuario.emailInvalido)
    LoginPage.preencherSenha(usuario.senhaInvalida)
  })
})

When('clico no botão de login', () => {
  LoginPage.clicarLogin()
})

Then('devo ser direcionado para o dashboard', () => {
  DashboardPage.validarDashboard()
})

Then('devo visualizar uma mensagem de erro', () => {
  LoginPage.validarMensagemErro()
})
