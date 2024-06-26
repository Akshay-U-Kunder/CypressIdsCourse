describe("Handling Alerts", () => {
  it("Js Normal Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.get("button[onclick='jsAlert()']").click()

    cy.on("window:alert", (t) => {
      expect(t).to.contain("I am a JS Alert")
    })
    cy.get("#result").should("have.text", "You successfully clicked an alert")
  })

  it("Js Confirmation Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.get("button[onclick='jsConfirm()']").click()

    //Cypress Automatically closed alert window
    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm")
    })
    //cy.get("#result").should("have.text", "You clicked: Ok")

    //Close alert window using cancel button
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on("window:confirm", () => false)
    cy.get("#result").should("have.text", "You clicked: Cancel")
  })

  it("Js Prompt Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //Before opening window pass text
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome")
    })

    cy.get("button[onclick='jsPrompt()']").click()

    cy.get("#result").should("have.text", "You entered: welcome")

    //close window using cancel
    //cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //Before opening window pass text
    /*cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome")
      cy.get("button[onclick='jsPrompt()']").click()

      cy.get("#result").should("have.text", "You entered: null")
    }) */
  })

  it("JS Authenticated alert - pass username pwd", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    })
    cy.get("div[class='example'] p").should("have.contain", "Congratulations")
  })
  it("JS Authenticated alert - username pwd along with url", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should("have.contain", "Congratulations")
  })
})
