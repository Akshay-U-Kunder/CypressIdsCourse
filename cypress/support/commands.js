/// <reference types="Cypress" />

import "cypress-file-upload"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import 'cypress-file-upload';
//require('cypress-downloadfile/lib/downloadFileCommand')

require("@4tw/cypress-drag-drop")

Cypress.Commands.add("login", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("https://dev-pms.indeadesignsystems.com/login")
    cy.get("[type='email']").type(username)
    cy.get("[type='password']").type(password)
    cy.get("[type='submit']").click()
    cy.wait(5000)
  })
})

//Aliasing
Cypress.Commands.add("aliasExample", () => {
  cy.get('[data-testid="email"]').invoke("val").as("showingEmailCommand")
  cy.get('[data-testid="name"]').invoke("val").as("showingNameCommand")
})
