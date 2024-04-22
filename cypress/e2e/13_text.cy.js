describe("test function", () => {
  it("get text using text method option", () => {
    cy.visit("https://codenboxautomationlab.com/practice/")

    cy.get(".page-title")
      .invoke("text")
      .then((text1) => {
        expect(text1).to.eq("Automation Practice")
      })
  })

  it("get text using text method option2", () => {
    cy.visit("https://codenboxautomationlab.com/practice/")

    cy.get(".page-title").then(function (text2) {
      cy.log(text2.text())
    })
  })
})
