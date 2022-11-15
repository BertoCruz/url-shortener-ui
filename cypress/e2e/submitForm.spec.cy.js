describe('empty spec', () => {

  beforeEach(() => {
    cy.intercept(
      {method: "POST", url: "http://localhost:3001/api/v1/urls"},
      {
        statusCode: 201,
        body: {
          long_url: "https://www.youtube.com/results?search_query=la+historia+completa+de+rock+mexicano+en+los+90s",
          title: "Mexican Rock Search"
        }
      }
    ).as( "samplePost")    
    cy.visit("http://localhost:3000")
  })

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})