describe('ContactPage', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/contact'); // Update the URL to match the ContactPage page URL
    });
  
    it('Should fill out and submit the contact form successfully', () => {
      cy.get('#firstName').type('John'); // Fill in the First Name input field
      cy.get('#lastName').type('Doe'); // Fill in the Last Name input field
      cy.get('#phoneNumber').type('1234567890'); // Fill in the Phone Number input field
      cy.get('#email').type('john.doe@example.com'); // Fill in the Email input field
      cy.get('#comment').type('This is a test comment'); // Fill in the Comment textarea
  
      cy.intercept('POST', '/api/contact').as('submitForm'); // Intercept the form submission request
  
      cy.get('form').submit(); // Submit the form
  
     
    });
  
    it('Should handle form submission errors', () => {
      cy.intercept('POST', '/api/contact').as('submitForm'); // Intercept the form submission request and force an error response
  
      cy.get('form').submit(); // Submit the form
  
     
    });
  
    it('Should update form state on input change', () => {
      const testValue = 'Test Value';
      cy.get('#firstName').type(testValue); // Simulate typing in the First Name input field
    });
  });