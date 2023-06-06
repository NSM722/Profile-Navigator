describe('Navigation', () => {
  // starts from the home/index page
  it('should navigate to the customer profile page', () => {
    cy.visit('http://localhost:3000/');

    // capture the dynamic [id] parameter from the URL
    cy.get('a[href*="/customers/"]').first().invoke('attr', 'href').then((href) => {

      /**
       * first get the href attribute
       * extract the id by splitting(/)
       * console.log(href?.split('/')) yields 
       * this array ["", "customers", 1] then
       * get the last segment of the array
       * with the pop() method
       * 
       */
      const customerId = href?.split('/').pop();
      console.log(href?.split('/'))
      /**
       * first() Get the first DOM element within a set of DOM elements
       * {force: true} forces the click event
       */
      cy.get('a[href*="/customers/"]').first().click({force: true});

      // assert the URL contains the expected pattern
      cy.url().should('include', `customers/${customerId}`);

      // assert the following h6 heading is contained in the page
      cy.get('h6').contains('Return to Home Page');
    });
  });
});
