import { getUrls } from "../../src/apiCalls"

describe(`When a user visit's the page`, () => {
  beforeEach(() => {
    cy.intercept({method: "GET", url: "http://localhost:3001/api/v1/urls"}).as( "getUrls")    
    cy.visit("http://localhost:3000")
  })

  it('they can view the page title and the existing shortened URLs', () => {
    cy.get('h1').contains("URL Shortener")

    cy.wait("@getUrls").its('response.body')
    .then((data) => {
      cy.get(".url").contains("h", data.title)
      cy.get(".url").contains("a", data.short_url)
      cy.get(".url").contains("p", data.long_url)
    })

  })

  it('they can view the Form with the proper inputs', () => {
    cy.get('[placeholder="Title..."]').should("be.visible")
    cy.get('[placeholder="Title..."]').should("have.value", 'Title...')
    cy.get('[placeholder="URL to Shorten..."]').should("be.visible")

  })

  it('When a user fills out the form, the information is reflected in the input fields', () => {
    cy.get('[placeholder="Title..."]').type("Sample Title")
    cy.get('[placeholder="URL to Shorten..."]').type("https://www.youtube.com/results?search_query=la+historia+completa+de+rock+mexicano+en+los+90s")

  })
})