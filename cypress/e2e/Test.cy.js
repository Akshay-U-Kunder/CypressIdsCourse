describe("Cart Test", () => {
  it("Adds items to the cart", () => {
    cy.visit("./example.html")
    cy.get(".product").eq(0).find("button").click()
    cy.get(".product").eq(1).find("button").click()
    cy.get(".product").eq(2).find("button").click()
  })
})
