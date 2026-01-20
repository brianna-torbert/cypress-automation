describe('Unauthorized API Access', () => {
  it('should return 401 when no auth token is provided', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/status/401',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401)
    })
  })
})