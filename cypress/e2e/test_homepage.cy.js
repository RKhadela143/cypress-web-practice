import homePage from '../pages/HomePage';

describe('Home Page', () => {
    beforeEach(() => {
        cy.visit("https://bstackdemo.com/signin")
    })
    
    it('Enter First Name', () => {
        
        homePage.enterFirstName('Romik')
    })
})