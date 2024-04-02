describe("Mouse Events", () => {
  it("MouseHover", () => {
    cy.visit("https://demo.opencart.com")

    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("not.be.visible")

    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click()

    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("be.visible")
  })

  it("Right Click - Approch1 Trigger", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")
    cy.get(
      ".context-menu-item.context-menu-icon.context-menu-icon-copy"
    ).should("be.visible")
  })
  it("Right Click - Approch2 rightclick", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    cy.get(".context-menu-one.btn.btn-neutral").rightclick()
    cy.get(
      ".context-menu-item.context-menu-icon.context-menu-icon-copy"
    ).should("be.visible")
  })

  it("Double Click Approch1 - Trigger", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    )

    cy.frameLoaded("#iframeResult")

    //Using Trigger Event
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .trigger("dblclick")

    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!")
  })

  it("Double Click Approch2 -dblclick", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    )

    cy.frameLoaded("#iframeResult")

    //Using Trigger Event
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick()

    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!")
  })

  it("Drag and Drop", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    )

    cy.get("#box6").drag("#box101", { force: true })
  })

  it.only("Scrolling Page", () => {
    cy.visit("https://docs.cypress.io/plugins")

    cy.get(
      "section[data-cy='plugin-Custom Commands'] li:nth-child(11) div:nth-child(1) h3:nth-child(1)"
    ).scrollIntoView({ duration: 2000 })

    cy.get(
      "section[data-cy='plugin-Custom Commands'] li:nth-child(11) div:nth-child(1) h3:nth-child(1)"
    ).should("be.visible")

    cy.get(
      "a[href='https://github.com/badeball/cypress-cucumber-preprocessor']"
    ).scrollIntoView({ duration: 2000 })

    cy.get(
      "a[href='https://github.com/badeball/cypress-cucumber-preprocessor']"
    ).should("be.visible")

    cy.get("[class='theme-doc-footer-edit-meta-row row']").scrollIntoView({
      duration: 2000,
    })
  })
})
