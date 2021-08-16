/// <reference types="Cypress" />

export class ValidateLandingPage {

   // This class will cover Landing Page 

    navigate(url) {
        cy.visit(url)
        cy.viewport(1440, 703)
        cy.wait(10000)
    };

    validateMainPage() {
        // Validate Brand Logo, url and Sign In button
        cy.get('#header_logo a')
          .should('have.attr', 'href', 'http://automationpractice.com/')
        cy.title().should('eq', "My Store")
    };

    navigateToAccountPage() {
        // Click Sign In button and page lands to Account Page
        cy.contains('Sign in').click()
        cy.url().should('include', '?controller=authentication&back=my-account')
    };
};