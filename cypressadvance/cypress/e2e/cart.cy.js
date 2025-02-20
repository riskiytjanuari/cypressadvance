import saucedemoPage from "../support/page-object/saucedemoPage";

describe('add item', () => {
  beforeEach(() => {
    cy.visit(''); // Mengunjungi halaman sebelum setiap test
  })
  it.only('add 1 item', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('have.text', 'Products')
    saucedemoPage.selectbackPack
  })
})