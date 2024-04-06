/// <reference types='Cypress'/>
/// <reference types='cypress-iframe'/>
import 'cypress-iframe'

describe('IFrame', () => {
    it('Test iframe', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.getIframeBody().find('a[href*=mentorship]').eq(0).click()
        cy.wait(2000)
        cy.getIframeBody().find('h1.pricing-title').should('have.length', 2)
    })
})