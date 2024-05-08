describe("Child Tab", () => {
  it("Approch 1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows") //parent window

    //remove attribute and click to open new window in same window
    cy.get(".example>a").invoke("removeAttr", "target").click()

    cy.url().should("eq", "https://the-internet.herokuapp.com/windows/new")

    cy.wait(5000)
    cy.go("back") //Back to parent tab
  })

  it("Approch 2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows") //parent window

    cy.get(".example>a").then((e) => {
      const url = e.prop("href")
      cy.visit(url)
    })

    cy.url().should("eq", "https://the-internet.herokuapp.com/windows/new")

    cy.wait(5000)
    cy.go("back")
  })
})
