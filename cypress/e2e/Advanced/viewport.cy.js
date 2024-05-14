describe("Viewport Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com/")
  })

  it("ipad-2", () => {
    cy.viewport("ipad-2")
    cy.log("ipad-2")
    cy.wait(3000)
  })

  it("iphone-x", () => {
    cy.viewport("iphone-x")
    cy.log("iphone-x")
    cy.wait(3000)
  })

  it("macbook-16", () => {
    cy.viewport("macbook-16")
    cy.log("macbook-16")
    cy.wait(3000)
  })

  it("Custom resolution", () => {
    cy.viewport(550, 750)
    cy.log("Custom resolution: 550*750")
    cy.wait(3000)
  })
})
