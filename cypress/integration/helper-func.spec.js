/// <reference types="Cypress" />

// import { ValidateAuthenticationPage } from "./page-objects.js/authenticationPage.spec.js"
// import { ValidateRegisterPage } from "./page-objects.js/registrationPage.spec.js"

// export function helperFunc() {
//     const authenticationPage = new ValidateAuthenticationPage()
//     const accountRegisterPage = new ValidateRegisterPage()
// }

export function generateRandomtext() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  };
  
  console.log(generateRandomtext());

// This wrapper function will help to iterate over all mendatory fields in form.
export function getRegistrationFields( keysToBeRemoved= null, first_name="", last_name="", passwordField="", address="", city="", state="",
zipcode="", phone="", alias_address="") {

    const randomName = generateRandomtext()

    const registerFields = {
        "first_name": randomName,
        "last_name": randomName,
        "passwordField": "3563463463463463",
        "address": '123 New York',
        "city": 'New York',
        "state": state,
        "zipcode": '54000',
        "phone": '34534534534',
        "alias_address": '234 US'
    };
    if (keysToBeRemoved){
        for (var key in keysToBeRemoved) {
            delete registerFields[keysToBeRemoved[key]]
        };
    return registerFields
    };
};