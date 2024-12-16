describe('Test', () => {
    it('Happy Path Buy with Standard User', () => {
        cy.standardUser_login()
        cy.buy_happyPath()
    })
  
    it('Happy Path Buy with Problem User', () => {
        cy.problemUser_login()
        cy.buy_happyPath()
    })

        //buy_happyPath
        //problemUser_login
})