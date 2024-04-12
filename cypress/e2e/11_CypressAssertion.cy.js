describe("Cypress Assertion Suite", () => {
  it("cypress Assertion Test", () => {
    cy.visit("https://www.google.com/search?q=java+script+by+testers+talk")

    cy.get("#APjFqb").then((element) => {
      expect(element.text()).to.equal("java script by testers talk")
    })

    cy.get("#APjFqb").should("have.text", "java script by testers talk")
    cy.get("#APjFqb").should("contain", "java script by testers talk")
    cy.get("#APjFqb").should("be.visible")
    cy.get("#APjFqb").should("have.html", "java script by testers talk")

    cy.get("#APjFqb")
      .should("have.html", "java script by testers talk")
      .and("have.attr", "value")

    cy.get("#APjFqb")
      .should("have.html", "java script by testers talk")
      .and("have.attr", "value")
      .and("include", "java script by testers talk")

    cy.get("#APjFqb").then((element) => {
      expect(element.text()).to.have.length(27)
    })

    assert.equal(4, "4", "equals")
    assert.strictEqual(4, 4, "strictly eqal")
  })
})
