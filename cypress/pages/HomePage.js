class homePage
{
    elms= {
        firstNameInput : () => cy.get('input[name="name"][required]'),
        dobInput : () => cy.get('[name="bday"]'),
        emailInput : () => cy.get('[name="email"]'),
        passwordInput : () => cy.get('[id="exampleInputPassword1"]'),
        genderDdl : () => cy.get('[id="exampleFormControlSelect1"]'),
        submitBtn : () => cy.get('[type="submit"]'),
        twoWayDataInput : () => cy.get('h4 [name="name"]')
    };

    enterFirstName(name){
        this.elms.firstNameInput().type(name)
    }
}

export default new homePage();