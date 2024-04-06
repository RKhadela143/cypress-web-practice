/// <reference types='cypress'/>

 
describe('Click Bag icon', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('[type="search"]').type("ca")
    cy.get('.product:visible').should('have.length',4)

    cy.get('.products').find('.product').each((el) => {
      const vegname = el.find('.product-name').text()
      if(vegname.includes('Cashews')) {
        cy.wrap(el).find('button').click()
      }
    })
    
    cy.get('.cart-icon>img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    cy.get('.chkAgree').click()
    cy.contains('Proceed').click()
    cy.get('div.products>div').should('contain', 'Thank you')
    cy.wait(2000)
    cy.url().should('not.contain', 'country')
  })
})