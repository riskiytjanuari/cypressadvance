import saucedemoPage from "../support/page-object/saucedemoPage";
import loginPage from "../support/page-object/loginPage";
import homePage from "../support/page-object/homePage";

describe('login page', () => {
  beforeEach(() => {
    cy.visit(''); 
  })
  it ('success login', () => {
    loginPage.inputUsername('standard_user')
    loginPage.verifyUsername()
    loginPage.inputPassword('secret_sauce')
    loginPage.verifyPasswrod()
    loginPage.clickLoginButton()
    homePage.verifyProductPage()
  })

  it('failed login', () => {
    loginPage.inputUsername('standard_user')
    loginPage.verifyUsername()
    loginPage.inputPassword('error')
    loginPage.verifyPasswrod()
    loginPage.clickLoginButton()
    homePage.verifyProductPage()
  })

})