describe("Alias Test Suite", () => {
  before(() => {
    cy.visit("https://commitquality.com/practice-contact-form")

    cy.get('[data-testid="email"]')
      .type("CommitQuality@fakeemailaddresssss.com")
      .invoke("val")
      .as("showingText")
  })

  it("alist test", () => {
    cy.get("@showingText").should("eq", "CommitQuality@fakeemailaddresssss.com")
  })
})
