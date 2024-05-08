it("Get text from a specific div element", () => {
  cy.visit("./example2.html")
  cy.get("div#specific-div")
    .invoke("text")
    .then((text) => {
      cy.log("The text is: " + text)
    })
})
