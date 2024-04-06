/// <reference types='cypress'/>
 
describe('Green kart home page seach and Add to cart', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('[type="search"]').type("ca")
    cy.get('.product:visible').should('have.length',4)

    // cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()

    cy.get('.products').find('.product').each((el) => {
      const vegname = el.find('.product-name').text()
      if(vegname.includes('Cashews')) {
        cy.wrap(el).find('button').click()
      }
    })

    const logo = cy.get('.brand').then((logo) => cy.log(logo.text()))
    
  })
})