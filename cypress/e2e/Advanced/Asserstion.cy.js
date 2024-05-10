describe("Assersions Test Suite", () => {
  it("Assersion example", () => {
    cy.visit("https://commitquality.com/")
    const rows = cy.get(".product-list-table tbody tr")

    //Assert there are 10 rows
    rows.its("length").should("equal", 10)

    //chai-jquery
    const filterButton = cy.get('[data-testid="filter-button"]')
    filterButton.should("have.text", "Filter")

    //Chaining the assersions
    filterButton
      .should("have.text", "Filter")
      .and("have.class", "filter-button")

    //should callback Assertion
    cy.get(".product-list-table tbody tr").should(($rows) => {
      expect($rows[0]).to.have.text("11Product 2152021-02-01")
      expect($rows[1]).to.have.text("10Product 1102021-01-01")
    })
  })
})
