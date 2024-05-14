describe("Reply Feature Test Suite", () => {
  it("Basic Filter", () => {
    cy.visit("https://commitquality.com/")

    //Workaround
    //cy.get(".filter-textbox").type("Product 2")

    //cy.get('[data-testid="filter-button"]').click()

    // cy.get('[data-testid="name"]').first().should("contain.text", "Product 2")
    //cy.get('[data-testid="doesnotexist"]').click()
    cy.get(".filter-textbox").should("have.text", "subscribe")
  })
})
