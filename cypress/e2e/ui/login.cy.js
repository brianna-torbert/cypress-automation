describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.fixture('users').as('users')
  })

  it('should log in successfully with valid credentials', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password)
    cy.url().should('include', '/dashboard')
  })

  it('should show error message with invalid credentials', function () {
  cy.login(this.users.invalidUser.username, this.users.invalidUser.password)
  cy.contains('Invalid credentials').should('be.visible')
})

  })