describe("Validate Complex datausing assert", () => {
  it("TDD assersion", () => {
    cy.visit("https://www.google.com/")

    let firstName = "TestingFunda"

    assert.equal(firstName, "TestingFunda")

    assert.include(firstName, "Testing")

    assert.typeOf(firstName, "String")

    assert.notTypeOf(firstName, "Integer")

    //asserting Objects

    let person = {
      firstName: "Testing",
      lastName: "funda",
    }

    assert.property(person, "lastName")
    assert.isObject(person)
    assert.deepPropertyVal(person, "lastName", "funda")
    assert.deepEqual(person, {
      firstName: "Testing",
      lastName: "funda",
    })

    //Asserting Array's
    let employeeIds = [1, 2, 3, 4, 5]
    assert.isArray(employeeIds)
    assert.includeDeepMembers(employeeIds, [2, 3])
    assert.includeDeepOrderedMembers(employeeIds, [1, 2, 3, 4, 5])
    assert.typeOf(employeeIds, "Array")
  })
})
