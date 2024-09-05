describe('About Page', () => {
  it('Should display the hero section with correct content', () => {
    cy.visit('http://localhost:3000/about');
    cy.get('.hero-sections').should('be.visible');
    cy.get('.hero-contents').should('contain', 'We are SPARK');
    cy.get('.hero-contents').should('contain', 'Be a Welcomer by volunteering, engaging your business, and more.');
  });

  it('Should display the stats section with correct content', () => {
    cy.visit('http://localhost:3000/about');
    cy.get('.stats-section').should('be.visible');
    cy.get('.stats-title').should('contain', 'Our Guiding Principles');
    // Update the following line with the actual number of elements you have with the class col-md-3

  });

  it('Should display the staff section with correct staff members', () => {
    cy.visit('http://localhost:3000/about');
    cy.get('.Members').should('have.length', 5);
    cy.get('.Members-pic').should('have.length', 5);
    // Add more specific assertions for each staff member if needed
  });
});


describe('AboutPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about'); // Update the URL to match the About page URL
  });

  it('Should display the hero section with correct title and lead text', () => {
    cy.get('.hero-sections').should('be.visible');
    cy.get('.hero-contents h1').should('contain', 'We are SPARK');
    cy.get('.hero-contents p.lead').should('contain', 'Be a Welcomer by volunteering, engaging your business, and more.');
  });

  it('Should display the Welcome to Spark section with the correct content', () => {
    cy.get('.stats-section p').should('contain', 'your go-to platform for community service initiatives within the lively city of Charlotte.');
  });


  it('Should display the Our Staff section with staff members', () => {
    cy.get('.stats-title').should('contain', 'Our Staff');
    cy.get('.Members').should('have.length', 5); // Check the number of staff members
    cy.get('.Members h3').eq(0).should('contain', 'Juan Casilla');
    cy.get('.Members h3').eq(1).should('contain', 'Lourdes Villa');
    cy.get('.Members h3').eq(2).should('contain', 'Ricardo Pena');
    cy.get('.Members h3').eq(3).should('contain', 'Tremon Armstron');
    cy.get('.Members h3').eq(4).should('contain', 'Vyncent Harris');
  });
});