describe('Login Flow', () => {
  it('incorrect login information', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('[name="username"]').type('Admin1')
    cy.get('input[type="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
  })
})