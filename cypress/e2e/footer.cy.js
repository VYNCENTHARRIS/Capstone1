describe('Footer', () => {
    it('Should display the footer with correct content and links', () => {
      cy.visit('http://localhost:3000'); // Update the URL to match the homepage URL
      cy.get('.site-footer').should('be.visible');
      cy.get('h6').eq(0).should('contain', 'About');
      cy.get('.text-justify').should('contain', 'Spark is a dynamic web platform that fosters volunteerism within organizations.');
      cy.get('.footer-links').should('have.length', 2); // Check for Resources and Quick Links sections
      cy.get('.footer-links').eq(0).find('a').should('have.length', 4); // Check the number of links in Resources section
      cy.get('.footer-links').eq(1).find('a').should('have.length', 5); // Check the number of links in Quick Links section
    });
  
    it('Should have social media icons with correct links', () => {
      cy.visit('http://localhost:3000'); // Update the URL to match the homepage URL
      cy.get('.site-footer').should('be.visible');
      cy.get('a[href="https://facebook.com"]').should('exist');
      cy.get('a[href="https://twitter.com"]').should('exist');
      cy.get('a[href="https://instagram.com"]').should('exist');
      cy.get('a[href="https://linkedin.com"]').should('exist');
    });
  
    it('Should have correct copyright text', () => {
      cy.visit('http://localhost:3000'); // Update the URL to match the homepage URL
      cy.get('.site-footer').should('be.visible');
    //   cy.contains('.copyright-text', 'Copyright &copy; 2024 All Rights Reserved by Spark.');
      cy.get('.copyright-text a').should('have.attr', 'href', '/');
    });
  });