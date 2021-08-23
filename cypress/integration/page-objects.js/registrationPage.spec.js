/// <reference types="Cypress" />


export class ValidateRegisterPage {

    checkRegistrationPageOpened() {
        // User is on Create an Account Page
        cy.contains('Create an account').should('be.visible');
    }

    checkmailFieldIsPreFilled(email_id) {
        // Check Email field is pre filled and match.
        cy.get('input#email').should('have.value', email_id);
    }

    clickRegisterButtton() {
        cy.get('#submitAccount').click();
    }

    fillFormWithFields(registerFields) {
        // Fill form's fields
        
        if ('firstName' in registerFields){
            const firstName = cy.get('#customer_firstname');
            firstName.type(registerFields['first_name']);
        }
        
        if ('lastName' in registerFields){
            const lastName = cy.get('#customer_lastname').should('be.visible');
            lastName.type(registerFields['last_name']);
        }

        if ('passwordField' in registerFields){
            const passwordField = cy.get('[id="passwd"]').should('be.visible');
            passwordField.type(registerFields['passwordField']);
        }

        if ('address' in registerFields){
            const addressField = cy.get('#address1').should('be.visible');
            addressField.type(registerFields['address']);
        }

        if ('city' in registerFields){
            const cityField = cy.get('#city').should('be.visible');
            cityField.type(registerFields['city']);
        }

        if ('state' in registerFields){
            // Select random option from dropdown

            cy.get('[name="id_state"] option').then(($element) => {
                const randomOptionSelect = Math.floor(Math.random() * $element.length);
                
                delete $element[0];
                cy.log($element.length);
                cy.get('[name="id_state"]').select(`${$element[randomOptionSelect].innerText}`);
                cy.log(`Random option selected is ${$element[randomOptionSelect].innerText}`);
            });
        }

        if ('zipcode' in registerFields){
            const zipcodeField = cy.get('#postcode');
            zipcodeField.type(registerFields['zipcode']);
        }

        if ('phone' in registerFields){
            const phoneField = cy.get('#phone_mobile');
            phoneField.type(registerFields['phone']);
        }

        if ('aliasAddress' in registerFields){
            const phoneField = cy.get('#alias');
            phoneField.type(registerFields['alias_address']);
        }

        return registerFields["firstName"];
    }
}
