describe("validate GET API", () => {
  it("Learnings GET API Tesing", () => {
    cy.api("https://dummy.restapiexample.com/api/v1/employee/1").then(
      (response) => {
        let empSalary = response.body.data.employee_salary

        expect(empSalary).equal(320800)

        //Message assertion
        expect(response.body).to.have.property(
          "message",
          "Successfully! Record has been fetched."
        )

        //status code asserstion
        expect(response.status).equal(200)

        //Body assertion
        expect(response.body).to.deep.equal({
          status: "success",
          data: {
            id: 1,
            employee_name: "Tiger Nixon",
            employee_salary: 320800,
            employee_age: 61,
            profile_image: "",
          },
          message: "Successfully! Record has been fetched.",
        })
      }
    )
  })
})
