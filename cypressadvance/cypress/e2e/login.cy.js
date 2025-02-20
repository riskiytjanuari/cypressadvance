import saucedemoPage from "../support/page-object/saucedemoPage";
import loginPage from "../support/page-object/loginPage";
import homePage from "../support/page-object/homePage";

describe('login page', () => {
  beforeEach(() => {
    cy.visit(''); // Mengunjungi halaman sebelum setiap test
  })
  it ('success login', () => {
    loginPage.inputUsername('standard_user')
    //loginPage.inputPassword('secret_sauce')
    loginPage.clickLoginButton
    homePage.verifyProductPage
  })

  it('failed login', () => {
    loginPage.inputUsername('standard_user')
    loginPage.inputPassword('secretasdfa')
    loginPage.clickLoginButton
    loginPage.errorMessage
  })

})