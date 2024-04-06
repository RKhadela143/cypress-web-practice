import LoginPage from "../pages/LoginPage"

describe('Login Page', () => {
    before(function() {
        cy.fixture('example').then((data) => {
            // "this" is still the test context object
            this.data = data
        })
    })

    it('login with valid credential', () =>{
        cy.visit('https://bstackdemo.com/signin')
        LoginPage.enterUsername(this.data.validusername)
        LoginPage.enterPassword(this.data.password)
        LoginPage.clickLoginButton() 
    })
})