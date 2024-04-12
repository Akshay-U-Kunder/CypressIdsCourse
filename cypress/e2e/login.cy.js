Cypress.Commands.add("login", (username, password) => {
  // cy.visit("/login")
  // cy.get("#username").type(username)
  // cy.get("#password").type(password)
  // cy.get("form").submit()

  cy.visit("https://opensource-demo.orangehrmlive.com/")
  cy.get("input[placeholder='Username']").type(username)
  cy.get("input[placeholder='Password']").type(password)
  cy.get("form").submit()
})

describe("Login Test Suite", () => {
  it("Logs in with valid credentials", () => {
    cy.login("Admin", "admin123")
    cy.url().should("include", "/dashboard")
  })
})
