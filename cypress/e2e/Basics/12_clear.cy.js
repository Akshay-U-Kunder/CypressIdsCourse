describe("Clear Text", () => {
  it("clear text demo", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")

    cy.get("input[name='username']").type("austest")
    cy.get("input[name='username']").clear()

    cy.scrollTo("bottom")
    cy.scrollTo("top")

    cy.get("#footerPanel > :nth-child(1) > :nth-child(2) > a").scrollIntoView()
  })
})
