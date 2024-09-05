describe('LoginForm', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login'); // Update the URL to match the LoginPage URL
    });
  
    it('Should fill out and submit the login form successfully', () => {
      cy.get('#email').type('admin@example.com'); // Fill in the Email input field
      cy.get('#password').type('password123'); // Fill in the Password input field
  
      cy.intercept('POST', 'http://localhost:5000/api/login').as('loginRequest'); // Intercept the login request
  
      cy.get('form').submit(); // Submit the form
  
      
    });
  
    it('Should display validation errors for invalid inputs', () => {
      cy.get('#email').type('invalid-email'); // Fill in an invalid email format
      cy.get('#password').type(' '); // Leave the password field empty
  
      cy.get('form').submit(); // Submit the form
  
      cy.get('.error').should('contain', 'Please enter a valid email address.'); // Check if the email validation error is displayed
      });
  
    it('Should display general error message for failed login attempt', () => {
      cy.intercept('POST', 'http://localhost:5000/api/login', { statusCode: 401, body: { error: 'Invalid credentials' } }).as('loginRequest');
  
      cy.get('form').submit(); // Submit the form
  
    });
  
    it('Should navigate to the Forgot Password page when the link is clicked', () => {
      cy.get('.forgot-password-link').click(); // Click on the Forgot Password link
      cy.url().should('include', '/forgot-password'); // Check if the user is redirected to the Forgot Password page
    });
  });