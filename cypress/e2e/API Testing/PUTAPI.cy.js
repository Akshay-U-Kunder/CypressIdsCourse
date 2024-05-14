describe("validate POST API", () => {
  it("Learnings POST API Tesing", () => {
    cy.request("PUT", "https://dummy.restapiexample.com/api/v1/update/3/", {
      name: "test",
      salary: "123",
      age: "23",
    }).then((response) => {
      //Message assertion
      expect(response.body).to.have.property(
        "message",
        "Successfully! Record has been added."
      )

      //status code asserstion
      expect(response.status).equal(200)
    })
  })
})
