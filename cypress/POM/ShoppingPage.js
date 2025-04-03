class ShoppingPage {
    
    go_to_product_shop() {
        cy.get('#products-list').should('be.visible').and('not.be.disabled').click();
     };
    
    find_phone_and_add_to_cart(title){
        cy.get('.shop-item').contains('.shop-item-title', title)
          .parents('.shop-item')
          .find('button') 
          .click();
      };
    
      is_phone_in_cart(title) {
        cy.get('.cart-items').contains('.cart-item-title', title)
          .parents('.cart-items')
          .find('.cart-item-title').should('have.text', title); 
      };
    
      click_purchase() {
        cy.contains('button', 'PURCHASE').click();
      }; 

}

module.exports = new ShoppingPage();
