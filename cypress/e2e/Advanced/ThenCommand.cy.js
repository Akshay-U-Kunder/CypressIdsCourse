describe("Then Command Test Suite", () => {
  it("Then cmd example", () => {
    cy.visit("https://commitquality.com/practice-contact-form")

    //only after we type in something will we then access the textbox and get its text
    cy.get('[data-testid="name"]')
      .type("Testing")
      .then((textbox) => {
        //in here we can control the order of execution
        //.val() is jquery to grab the value info
        console.log(textbox.val())
      })
  })

  it("Then return example", () => {
    cy.visit("https://commitquality.com/")

    /* const topRow = cy.get(".product-list-table tbody tr").then((rows) => {
      return rows[0]
    })

    topRow.then((row) => {
      expect(row).to.have.text("11Product 2152021-02-01")
    }) */

    const topRow = cy
      .get(".product-list-table tbody tr")
      .then((rows) => {
        return rows[0]
      })
      .then((row) => {
        expect(row).to.have.text("11Product 2152021-02-01")
      })
  })
})
