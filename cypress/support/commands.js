Cypress.Commands.add('standardUser_login', () => { 
    cy.visit('https://www.saucedemo.com/')
//login
    cy.get('#user-name').click().type('standard_user')
    cy.get('#password').click().type('secret_sauce')
    cy.get('#login-button').click()
})

Cypress.Commands.add('problemUser_login', () => { 
    cy.visit('https://www.saucedemo.com/')
    //login
    cy.get('#user-name').click().type('problem_user')
    cy.get('#password').click().type('secret_sauce')
    cy.get('#login-button').click()
})

Cypress.Commands.add('buy_happyPath', () => { 
//añadir items al carrito
cy.get('#add-to-cart-sauce-labs-backpack').click()
cy.get('#add-to-cart-sauce-labs-bike-light').click()
cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
//checkout
cy.get('#shopping_cart_container').click()
cy.get('#checkout').click()
//compra
cy.get('#first-name').click().type('Alvaro')
cy.get('#last-name').click().type('Gonzalez')
cy.get('#postal-code').click().type('2492')
cy.get('#continue').click()
cy.get('#finish').click()
//volver al menu y desloguear
cy.get('#back-to-products').click()
cy.get('#react-burger-menu-btn').click()
cy.get('#logout_sidebar_link').click()
})