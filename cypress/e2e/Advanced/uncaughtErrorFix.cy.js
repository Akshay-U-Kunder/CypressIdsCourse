describe("Fixing Uncaught Error from application not from cypress Test Suite", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it("Application error Fix", () => {
    cy.visit("https://chercher.tech/practice/popups#")
  })
})
