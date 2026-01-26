describe('Logout Functionality', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.fixture('users').as('users')
  })

  it('should log out successfully', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password)

    cy.get('.oxd-userdropdown-tab').click()
    cy.contains('Logout').click()

    cy.url().should('include', '/auth/login')
  })

  Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('reading \'response\'')) {
    return false
  }
})

})


