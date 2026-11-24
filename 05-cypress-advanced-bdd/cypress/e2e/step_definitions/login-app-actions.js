import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import DashboardPage from '../../support/pages/dashboard.page'

Given('que realizo login usando App Action', () => {
  cy.loginAppAction()
})

Then('devo acessar o dashboard sem usar a interface de login', () => {
  DashboardPage.validarDashboard()
})
