/// <reference types="Cypress" />

import { ValidateLandingPage } from "./page-objects.js/mainLandingPage.spec.js"
import { baseUrl } from '../variables.js'

describe('Validate Landing Page and redirection to Authentication Page', () => {
    const landingMainPage  = new ValidateLandingPage()

    beforeEach(() => landingMainPage.navigate(baseUrl))

    it('Validate Logo, url and Sign In button in Landing Page', () => {
        landingMainPage.validateMainPage()
    });

    it('Should navigate to Account Page by clicking SignIn', () => {
        landingMainPage.navigateToAccountPage()
    });

    it('Should navigate to Account Page by clicking SignIn', () => {
        landingMainPage.navigateToAccountPage()
    });

});