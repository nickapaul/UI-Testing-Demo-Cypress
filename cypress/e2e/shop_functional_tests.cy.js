
describe('Shop Functional Tests', () => {
  beforeEach(() => {    
    cy.visit('https://qa-practice.netlify.app/')
  })

  it('GIVEN navigating to the store WHEN I put a phone in the cart THEN I have a phone in my cart', () => {
    // Arrange
    let title = 'Apple iPhone 12, 128GB, Black'
    cy.go_to_product_shop()

    // Act
    cy.find_phone_and_add_to_cart(title)

    // Assert
    cy.is_phone_in_cart(title)
  })  

  it('GIVEN a phone in the cart WHEN I click purchase THEN I have purchased a phone', () => {
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
  
  it('Fail on purpose', () => {
    // Arrange
    let title = 'Hello Nick!'
    let target_message = 'Congrats! Your order of $905.99 has been registered!'
    cy.go_to_product_shop()
    cy.find_phone_and_add_to_cart(title)

    // Act
    cy.click_purchase()

    // Assert
    cy.get('#message').should('have.text', target_message)
  }) 
})
