class loginPage{
    username = '#user-name'
    password = '#password'
    login_button = '[data-test="login-button"]'
    error_message ='[data-test="error"]'

    inputUsername(username){
        cy.get(this.username).type(username)
    }
    inputPassword(password){
        cy.get(this.password).type(password)
    }

    clickLoginButton(){
        cy.get(this.login_button).click()
    }

    errorMessage(){
        cy.get(this.error_message).should('contain.text', 'Epic')
    }
}

export default new loginPage()