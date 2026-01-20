describe('Authentication API Tests', () => {
  it('should return 200 for a valid authentication request', () => {
    cy.request({
      method: 'GET',
      url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})