describe("UI Element", () => {
  it("Checking Radio Buttons", () => {
    cy.visit("https://testautomationpractice.blogspot.com/")

    //Visibility of Radio Button
    cy.get("#male").should("be.visible")
    cy.get("#female").should("be.visible")

    //Selecting Radio Button
    cy.get("#male").check().should("be.checked")
    cy.get("#female").should("not.be.checked")

    cy.get("#female").check().should("be.checked")
    cy.get("#male").should("not.be.checked")
  })

  it("Checking Checkboxes", () => {
    cy.visit("https://testautomationpractice.blogspot.com/")

    //Visibility of Checkboxes
    cy.get("input#monday").should("be.visible")

    //Selecting Single checkbox
    cy.get("input#monday").check().should("be.checked")

    //Unselecting checkbox
    cy.get("input#monday").uncheck().should("not.be.checked")

    //Selecting All the Checkboxes
    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should("be.checked")

    cy.get("input.form-check-input[type='checkbox']")
      .uncheck()
      .should("not.be.checked")

    cy.get("input.form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked")
    cy.get("input.form-check-input[type='checkbox']")
      .last()
      .check()
      .should("be.checked")
  })
})
