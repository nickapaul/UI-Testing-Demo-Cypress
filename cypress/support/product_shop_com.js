
Cypress.Commands.add('find_phone_and_add_to_cart', (title) => {
    cy.get('.shop-item').contains('.shop-item-title', title)
      .parents('.shop-item')
      .find('button') 
      .click();
  });

  Cypress.Commands.add('is_phone_in_cart', (title) => {
    cy.get('.cart-items').contains('.cart-item-title', title)
      .parents('.cart-items')
      .find('.cart-item-title').should('have.text', title); 
  });

  Cypress.Commands.add('click_purchase', () => {
    cy.contains('button', 'PURCHASE').click();
  });