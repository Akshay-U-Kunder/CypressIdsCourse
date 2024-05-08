/// <reference types="Cypress" />
describe("My First test", () => {
  it("Test1", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")
    cy.title().should("eq", "OrangeHRM")
  })

  it.skip("Test2", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")
    cy.title().should("eq", "OrangeHRM123")
  })
})
