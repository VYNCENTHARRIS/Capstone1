describe('HomePage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/'); // Update the URL to match the Home page URL
    });
  
    it('Should display the hero section with correct title and lead text', () => {
      cy.get('.hero-section').should('be.visible');
      cy.get('.hero-content h1').should('contain', 'Giving is the only true acquisition, we get only as we give.');
      cy.get('.hero-content p.lead').should('contain', 'Charity refers to the act of giving or providing assistance...');
      cy.get('.hero-content a.btn').should('contain', 'Get Started');
    });
  
    it('Should display the statistics section with correct statistics', () => {
      cy.get('.stats-section').should('be.visible');
      cy.get('.stats-title').should('contain', 'We Have Helped Communities Thrive');
      cy.get('.col-md-3').should('have.length', 10); // Check the total number of statistics
      // Add assertions to check each statistic value and description
    });
  
    it('Should display the testimonial section with correct testimonials', () => {
      cy.get('.testimonial-section').should('be.visible');
      cy.get('.testimonial-content').should('have.length', 2); // Check the total number of testimonials
      // Add assertions to check each testimonial content, author, and role
    });
  
    it('Should display the goals section with correct goals', () => {
      cy.get('.goals-section').should('be.visible');
      cy.get('.goals-section h2').should('contain', 'Our Goals Are...');
      cy.get('.col-md-4').should('have.length', 4); // Check the total number of goals
      // Add assertions to check each goal title and description
    });
  });