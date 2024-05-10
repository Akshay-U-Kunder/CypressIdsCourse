describe("Alias Test Suite", () => {
  before(() => {
    cy.visit("https://commitquality.com/practice-contact-form")

    cy.get('[data-testid="name"]').type("Subscribe")

    cy.get('[data-testid="email"]').type(
      "CommitQuality@fakeemailaddresssss.com"
    )
    cy.aliasExample()
  })

  it("alist test", () => {
    cy.get("@showingNameCommand").should("eq", "Subscribe")
    cy.get("@showingEmailCommand").should(
      "eq",
      "CommitQuality@fakeemailaddresssss.com"
    )
  })
})
