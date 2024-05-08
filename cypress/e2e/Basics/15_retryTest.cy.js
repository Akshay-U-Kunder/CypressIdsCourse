describe("Retry Rerun Test Suite", () => {
  it("Retry Rerun Test ", { retries: 2 }, () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")

    cy.get(".orangehrm-login-branding > imgg").should("be.visible").and("exist")
  })
})
