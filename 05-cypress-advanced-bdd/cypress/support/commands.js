import { autenticarViaAppAction } from './actions/auth.actions'

Cypress.Commands.add('loginAppAction', () => {
  autenticarViaAppAction()
})
