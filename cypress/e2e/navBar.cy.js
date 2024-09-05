describe('Navbar', () => {
    it('Should display the navbar with correct links', () => {
      cy.visit('http://localhost:3000'); // Update the URL to match the homepage URL
      cy.get('.navbar').should('be.visible');
      cy.get('.navtext').eq(0).should('contain', 'Home');
      cy.get('.navtext').eq(1).should('contain', 'About us');
      cy.get('.navtext').eq(2).should('contain', 'Event');
      cy.get('.navtext').eq(3).should('contain', 'Contact');
      cy.get('#Loging__btn').should('contain', 'Log in');
    });
  
    it('Should toggle the mobile menu when the mobile-navbar is clicked', () => {
      cy.visit('http://localhost:3000'); // Update the URL to match the homepage URL
      cy.get('.nav-menu').should('have.class', 'active');
    });
  });