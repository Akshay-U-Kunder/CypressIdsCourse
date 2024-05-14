describe("Learning API Intercept Test Suite", () => {
  it("Smiple API Intercept/ spy API request", () => {
    cy.visit("https://dummyapi.io/explorer")
    cy.intercept({
      path: "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
    }).as("comments")

    cy.get(".flex > :nth-child(5)").click()
    cy.wait("@comments").then((intercept) => {
      expect(intercept.response.body.limit).equal(10)
    })
  })

  it("Mock API request", () => {
    cy.visit("https://dummyapi.io/explorer")

    cy.intercept(
      "GET",
      "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
      { limit: 20, Name: "Testing Funda" }
    ).as("comments")

    cy.get(".flex > :nth-child(5)").click()
    cy.wait("@comments").then((intercept) => {
      expect(intercept.response.body.limit).equal(20)
      expect(intercept.response.body.Name).equal("Testing Funda")
    })
  })

  it.only("Data Driven API request using intercept", () => {
    cy.visit("https://dummyapi.io/explorer")

    cy.intercept(
      "GET",
      "/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10",
      { fixture: "./API_DDT.json" }
    ).as("comments")

    cy.get(".flex > :nth-child(5)").click()
    cy.wait("@comments").then((intercept) => {
      expect(intercept.response.body.limit).equal(20)
      expect(intercept.response.body.Name).equal("Testers Talk")
    })
  })
})
