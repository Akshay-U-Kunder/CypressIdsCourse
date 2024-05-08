const jsonData = require("../../fixtures/datadriventesting2.json")

describe("Data Driven Test Suite 2", () => {
  jsonData.forEach((testData) => {
    it("Data Driven Test1", () => {
      cy.visit("https://www.google.com/search?q=javascript+by+testers+talk")
      cy.get("textarea[class='gLFyf']").clear() //clear existing text
      //Enter new text
      cy.get("textarea[class='gLFyf']").type(testData.skill1)
      cy.get('button[type="submit"]').click()
    })
  })
})
