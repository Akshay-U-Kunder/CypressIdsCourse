describe("Cypress Fixtures Test Suite", () => {
  beforeEach(() => {
    cy.fixture("example").then(function (data) {
      this.data = data
      cy.log("'THIS: ", this.data)
    })
  })

  it("Pulls data from fixture", () => {
    cy.fixture("example").then((data) => {
      cy.log("Data: ", data)
    })
  })

  it("Update fixture data inline", () => {
    cy.fixture("example").then((data) => {
      data.email = "updatedEmail.com"
      cy.log("Updated: ", data)
    })
  })
})
