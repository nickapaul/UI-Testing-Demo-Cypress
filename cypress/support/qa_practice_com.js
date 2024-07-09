Cypress.Commands.add('go_to_product_shop', () => {
    cy.get('#products-list').should('be.visible').and('not.be.disabled').click();
 })