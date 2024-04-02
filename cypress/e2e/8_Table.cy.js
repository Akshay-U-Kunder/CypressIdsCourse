describe("Handle tables", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php")

    //Login credentials
    cy.get("#input-username").type("demo")
    cy.get("#input-password").type("demo")
    cy.get("button[type='submit']").click()

    cy.get(".btn-close").click()
    cy.get("#menu-customer>a").click() //click on customer main menu
    cy.get("#menu-customer>ul>li:first-child").click() //click on customer child menu
  })
  it("check Number Rows & columns", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      "have.length",
      "10"
    )

    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should("have.length", "7")
  })

  it("check cell data from Specific row & Column", () => {
    cy.get(
      "table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)"
    ).contains("hfgjhgjgjggj@gmail.com")
  })

  it("Read all the row & columns data in the 1st page", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text())
          })
        })
      }
    )
  })

  it("Pagination", () => {
    //Find total no. of pages
    cy.get(".col-sm-6.text-end").then((e) => {
      let totalPages
      let mytext = e.text() //Showing 1 to 10 of 19011 (1902 Pages)
      totalPages = mytext.substring(
        mytext.indexOf("(") + 1,
        mytext.indexOf("Pages") - 1
      )

      cy.log("Total number of pages in the table ===>" + totalPages)
    })

    //Read the data
    let total = 5

    for (let p = 1; p <= total; p++) {
      if (total > 1) {
        cy.log("Active page is==" + p)

        cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click()
        cy.wait(3000)

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((e) => {
                cy.log(e.text())
              })
            })
          }
        )
      }
    }
  })
})
