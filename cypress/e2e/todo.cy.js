
describe('example to-do app', () => {
  beforeEach(() => {    
    cy.visit('https://qa-practice.netlify.app/')

  })

  it('GIVEN navigating to the store WHEN I put a phone in the cart and click purchase THEN I have purchased a phone', () => {
    // Arrange
    let title = 'Apple iPhone 12, 128GB, Black'
    cy.go_to_product_shop()

    // Act
    cy.find_phone_and_add_to_cart(title)

    // Assert
    cy.is_phone_in_cart(title)
  })  


  it('GIVEN navigating to the store WHEN I put a phone in the cart and click purchase THEN I have purchased a phone', () => {
    // Arrange
    let title = 'Apple iPhone 12, 128GB, Black'
    let target_message = 'Congrats! Your order of $905.99 has been registered!'
    cy.go_to_product_shop()
    cy.find_phone_and_add_to_cart(title)

    // Act
    cy.click_purchase()

    // Assert
    cy.get('#message').should('have.text', target_message)
  })  
})
