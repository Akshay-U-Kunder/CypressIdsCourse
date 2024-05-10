describe("PMS Dashboard Test For session restore", () => {
  beforeEach("login", () => {
    cy.login("noreply@indeadesignsystems.com", "q1w2e3r4")
  })
  it("check ids icon visibility", () => {
    cy.visit("https://dev-pms.indeadesignsystems.com/login")
    cy.get(".navbar-brand").should("be.visible")
  })
  it("check text of upcoming event", () => {
    cy.visit("https://dev-pms.indeadesignsystems.com/login")
    cy.get("div[class='card'] div[class='card-header']").should(
      "have.text",
      "UPCOMING EVENTS & HOLIDAYS"
    )
  })
})
