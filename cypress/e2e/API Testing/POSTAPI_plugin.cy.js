describe("validate POST API", () => {
  it("Learnings POST API Tesing", () => {
    cy.api("POST", "https://dummy.restapiexample.com/api/v1/create", {
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

      //Body assertion
      // expect(response.body).to.deep.equal({
      //   status: "success",
      //   data: {
      //     name: "test",
      //     salary: "123",
      //     age: "23",
      //     id: 8428,
      //   },
      //   message: "Successfully! Record has been added.",
      // })
    })
  })
})
