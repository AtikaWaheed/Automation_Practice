/// <reference types="Cypress" />

import { createAccountText } from '../../variables.js'

export class ValidateAuthenticationPage {

    validateAccountPage() {

        // Validate Create an Account section with different fields
        cy.contains('Authentication')
        cy.get('#create-account_form').within((el) => {
            cy.contains('Create an account').should('be.visible')
            cy.contains(createAccountText)
              .should('be.visible')
            cy.contains('Email address').should('be.visible')
            cy.get('[name="SubmitCreate"]').should('be.visible')
        });
    };

    enterEmailAdress() {
        // Create random user id and enter in Email field
        const randomNum  = Math.floor(Math.random() * 50)
        const random_email = `testuser+${randomNum}@gmail.com`
        cy.log(random_email)
        cy.get('#email_create').clear().type(random_email)
        return random_email
    };

    clickSubmitButton() {
        cy.get('#SubmitCreate').click()
    };

    wrongFieldErrorMessage(invalidEmail) {
        // extract error message and validate
        cy.get('.alert li').then(($input) => {
            const errText = $input.text()
            expect(errText).to.equal(invalidEmail)
        });
    };

    navigateToRegistrationPage() {
        // User is on Registration Page
        cy.contains('Your personal information').should('be.visible')
    };
};