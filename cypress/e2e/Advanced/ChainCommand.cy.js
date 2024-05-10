describe("Chain command suite", () => {
  it("chain command example", () => {
    cy.visit("https://commitquality.com/")

    //chain a button
    cy.get(".filter-textbox").type("Product 2")

    //click filter button
    cy.get(".filter-button").contains("Filter").click()

    //chain a bunch togather
    cy.get("tbody")
      .find("tr")
      .find('[data-testid="id"]')
      .eq(0)
      .should("have.text", "11")
  })
})
