class DashboardPage {
  validarDashboard() {
    cy.url().should('include', 'dashboard')
  }
}

export default new DashboardPage()
