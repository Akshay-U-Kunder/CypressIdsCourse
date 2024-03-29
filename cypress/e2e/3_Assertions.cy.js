describe("Assertions Demo", () => {
  it("implicit Assertions", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")

    // cy.url().should("include", "orangehrmlive.com")
    // cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // cy.url().should("contains", "orangehrm")

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

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist")

    cy.get("input[placeholder='Username']")
      .type("admin")
      .and("have.value", "admin")
  })

  it("Expicit Assertions", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")

    cy.get("input[placeholder='Username']").type("admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    let expName = "manda user"
    let expNameW = "Ank Rana"

    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text()

      //BDD Style
      expect(actName).to.equal(expName)
      expect(actName).to.not.equal(expNameW)

      //TDD Stype
      assert.equal(actName, expName)
      assert.notEqual(actName, expNameW)
    })
  })
})
