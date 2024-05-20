describe("Login using fixtures for multiple logins", () => {
  it("Data Driven Test", () => {
    cy.fixture("orangehrm2").then((data) => {
      //launch Application
      cy.visit("https://opensource-demo.orangehrmlive.com/")

      data.forEach((userdata) => {
        cy.get("input[placeholder='Username']").clear().type(userdata.username)
        cy.get("input[placeholder='Password']").clear().type(userdata.password)
        cy.get("button[type='submit']").click()

        //validate Dashboard text if login was successful
        if (userdata.username == "Admin" && userdata.password == "admin123") {
          cy.get(
            ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
          ).should("have.text", userdata.expected)
          cy.get(".oxd-userdropdown-tab > .oxd-icon").click()
          cy.get(":nth-child(4) > .oxd-userdropdown-link").click()
          //cy.wait(5000)
        }
        //validate invalid credentials text if login was not successful
        else {
          cy.get(".oxd-alert-content > .oxd-text").should(
            "have.text",
            userdata.expected
          )
        }
      })
    })
  })

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false
  })
})
