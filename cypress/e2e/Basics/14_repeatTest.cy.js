describe("Repeat Test Suite", () => {
  Cypress._.times(5, (k) => {
    it("Repeat Test", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com")

      cy.url()
        .should("include", "orangehrmlive.com")
        .and(
          "eq",
          "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        )
        .and("contains", "orangehrm")
        .and("not.contains", "greenhrm")
        .and("not.eq", "orangehrm")

      cy.title().should("include", "Orange").and("eq", "OrangeHRM")

      cy.get(".orangehrm-login-branding > img")
        .should("be.visible")
        .and("exist")

      cy.get("input[placeholder='Username']")
        .type("admin")
        .and("have.value", "admin")
    })
  })
})
