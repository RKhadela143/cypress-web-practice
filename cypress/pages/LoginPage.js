class LoginPage{
    userNameInput = '[id="username"]'
    passwordInput = '[id="password"]'
    loginButton = '[id="login-btn"]'

    enterUsername(username){
        // cy.wait(2000)
        cy.get(this.userNameInput).click()
        cy.get('div[id*="react-select"]').contains(username, { matchCase: false }).click({force: true})
    }

    enterPassword(password){
        cy.get(this.passwordInput).click()
        cy.get('div[id*="react-select"]').contains(password, { matchCase: false }).click({force: true})
    }

    clickLoginButton(){
        cy.get(this.loginButton).click()
    }

    loginWithValidCred(){
        this.enterUsername()
        this.enterPassword()
        this.clickLoginButton()
    }
}

export default new LoginPage();