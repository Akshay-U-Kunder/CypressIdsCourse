describe("Handling Dropdowns", () => {
  it("Dropdown with Select", () => {
    cy.visit("https://testautomationpractice.blogspot.com/")

    cy.get("#country").select("India").should("have.value", "india")
  })

  it("Dropdown without Select", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

    cy.get("#select2-billing_country-container").click()
    cy.get(".select2-search__field").type("Italy").type("{enter}")

    cy.get("#select2-billing_country-container").should("have.text", "Italy")
  })

  it("Auto Suggest Dropdown", () => {
    cy.visit("https://www.wikipedia.org/")

    cy.get("#searchInput").type("Delhi")

    cy.get(".suggestion-title").contains("Delhi University").click()
  })

  it("Auto Suggest Dropdown", () => {
    cy.visit("https://www.google.com/")

    cy.get("#APjFqb").type("cypress automation")
    cy.wait(3000)

    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() == "cypress automation tool") {
        cy.wrap($el).click()
      }
    })

    cy.get("#APjFqb").should("have.value", "cypress automation tool")
  })
})
