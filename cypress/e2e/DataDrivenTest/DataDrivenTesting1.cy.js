describe("Data Driven Test Suite 1", () => {
  let testData

  before("Run Before All Test", () => {
    cy.fixture("datadriventesting1.json").then((jsonData) => {
      testData = jsonData
    })
  })

  it("Data Driven Test1", () => {
    cy.visit("https://www.google.com/search?q=javascript+by+testers+talk")
    cy.get("textarea[class='gLFyf']").clear() //clear existing text
    //Enter new text
    cy.get("textarea[class='gLFyf']").type(testData.skill1)
    cy.get('button[type="submit"]').click()
  })
})
