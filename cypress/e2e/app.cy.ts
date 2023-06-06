describe('Navigation', () => {
  // starts from the home/index page
  it('should navigate to the customer profile page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="/customers/"]').first().invoke('attr', 'href').then((href) => {
      const customerId = href?.split('/').pop();
      cy.get('a[href*="/customers/"]').first().click({force: true});

      cy.url().should('include', `customers/${customerId}`);

      cy.get('h6').contains('Return to Home Page');
    });
  });
});
