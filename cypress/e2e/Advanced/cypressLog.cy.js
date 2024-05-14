describe("Cypress Log Test Suite", () => {
  it("Cypress Logging", () => {
    cy.visit("https://commitquality.com/practice-contact-form")

    cy.get('[data-testid="name"]').type("Testing")

    cy.get('[data-testid="email"]').type(
      "CommitQuality@fakeemailaddresssss.com"
    )

    cy.get('[data-testid="email"]')
      .invoke("val")
      .then((text) => {
        cy.log(text)
      })

    cy.get('[data-testid="query-type"]').select("General")
    cy.get('[data-testid="dob"]').type("1990-01-01")

    // console.log("Subscribe")
    cy.log("Subscribe")

    //go to proactice page
    cy.get(".nav-link").contains("Products").click()

    // console.log("Subscribe Again")
    cy.log("Subscribe Again")
  })
})
