/// <reference types="Cypress" />

import { ValidateLandingPage } from "./page-objects.js/mainLandingPage.spec.js";
import { ValidateAuthenticationPage } from "./page-objects.js/authenticationPage.spec.js";
import { baseUrl, errEmail, alreadyRegisteredError } from '../variables.js';

describe('Validate "Create An Account Page" ', () => {
    const landingMainPage  = new ValidateLandingPage();
    const authenticationPage  = new ValidateAuthenticationPage();

    beforeEach(() => landingMainPage.navigate(baseUrl + '?controller=authentication&back=my-account'))

    it('Validate fields for "Create and Account section"', () => {
        authenticationPage.validateAccountPage();
    })

    it('Validate error message on wrong email address', () => {
        authenticationPage.clickSubmitButton();
        authenticationPage.wrongFieldErrorMessage(errEmail);
    })

    it('Validate error message on aready registered account', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.wrongFieldErrorMessage(alreadyRegisteredError);
    })

    it('Should be able to accept new account', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
    })

})
