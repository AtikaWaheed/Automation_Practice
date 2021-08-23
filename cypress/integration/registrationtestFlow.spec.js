/// <reference types="Cypress" />

// Refer Test_Scenarios.md file for Registration Page Test Steps

import { ValidateLandingPage } from "./page-objects.js/mainLandingPage.spec.js";
import { ValidateAuthenticationPage } from "./page-objects.js/authenticationPage.spec.js";
import { ValidateRegisterPage } from "./page-objects.js/registrationPage.spec.js";
import { getRegistrationFields } from "./helper-func.spec.js";
import { accountConfirmationPage } from "./page-objects.js/accountConfirmationPage.spec.js";
import { baseUrl, errFirstName,
         errLastName, errPassword, errAddress,
         errCity, errState,
         errZip, errAliasAddress, errPhone } from '../variables.js';

describe('Validate "Create An Account Page" ', () => {
    const landingMainPage = new ValidateLandingPage();
    const authenticationPage = new ValidateAuthenticationPage();
    const accountRegisterPage = new ValidateRegisterPage();

    beforeEach(() => landingMainPage.navigate(baseUrl + '?controller=authentication&back=my-account'));
    
    it.only('Should be able to redirect on Account Creation Page', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.checkRegistrationPageOpened();
    })

    it('validate email field is pre populated and match', () => {
        const emailId = authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.checkmailFieldIsPreFilled(emailId);
    })

    it('validate empty firstName error field', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["firstName"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        authenticationPage.wrongFieldErrorMessage(errFirstName);
    })

    it('validate empty lastName error field', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["lastName"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        authenticationPage.wrongFieldErrorMessage(errLastName);
    })

    it('validate empty password error field', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["passwordField"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        authenticationPage.wrongFieldErrorMessage(errPassword);
    })

    it('validate empty Address error field', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["address"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        authenticationPage.wrongFieldErrorMessage(errAddress);
    })

    it('validate empty City error field', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["city"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        authenticationPage.wrongFieldErrorMessage(errCity);
    })

    it('validate empty State error field', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["state"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        authenticationPage.wrongFieldErrorMessage(errState);
    });

    it('validate empty Zip/PotalCode error field', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["zipcode"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        authenticationPage.wrongFieldErrorMessage(errZip);
    })

    it('validate empty Mobile Phone error field', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["phone"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        authenticationPage.wrongFieldErrorMessage(errPhone);
    })

    it('validate empty alias Address error field', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["aliasAddress"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        authenticationPage.wrongFieldErrorMessage(errAliasAddress);
    })

    it('validate accoount has been created', () => {
        authenticationPage.enterEmailAdress();
        authenticationPage.clickSubmitButton();
        authenticationPage.navigateToRegistrationPage();
        accountRegisterPage.fillFormWithFields(getRegistrationFields(["keysToBeRemoved"])); //get reg fields
        accountRegisterPage.clickRegisterButtton();
        accountConfirmationPage();
    })
})
