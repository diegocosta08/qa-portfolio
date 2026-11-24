export function mockLoginComSucesso() {
  cy.intercept('POST', '**/login', {
    statusCode: 200,
    fixture: 'login-sucesso.json'
  }).as('postLoginSucesso')
}

export function mockLoginComErro() {
  cy.intercept('POST', '**/login', {
    statusCode: 401,
    fixture: 'login-erro.json'
  }).as('postLoginErro')
}

export function autenticarViaAppAction() {
  cy.visit('/login.html', {
    onBeforeLoad(win) {
      win.localStorage.setItem('token', 'fake-jwt-token')
      win.localStorage.setItem('authToken', 'fake-jwt-token')
      win.localStorage.setItem('isAuthenticated', 'true')
      win.localStorage.setItem(
        'usuario',
        JSON.stringify({
          email: 'usuario@teste.com'
        })
      )

      win.sessionStorage.setItem('token', 'fake-jwt-token')
    }
  })

  cy.visit('/dashboard.html')
}
