/// <reference types="Cypress" />

import { welcomeMessage } from '../../variables.js'

export function accountConfirmationPage (){
    // User has completed registration process.

    cy.contains(welcomeMessage).should('be.visible')
};

