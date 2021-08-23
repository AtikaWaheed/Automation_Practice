/// <reference types="Cypress" />

export function generateRandomtext() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

// This wrapper function will help to iterate over all mendatory fields in form.
export function getRegistrationFields( keysToBeRemoved= null, firstName="", lastName="", passwordField="", address="", city="", state="",
zipcode="", phone="", aliasAddress="") {

    const randomName = generateRandomtext();

    const registerFields = {
        "firstName": randomName,
        "lastName": randomName,
        "passwordField": "3563463463463463",
        "address": '123 New York',
        "city": 'New York',
        "state": state,
        "zipcode": '54000',
        "phone": '34534534534',
        "aliasAddress": '234 US'
    };
    if (keysToBeRemoved){  //Key which needs to be removed will be poped out from dict.
        for (var key in keysToBeRemoved) {
            delete registerFields[keysToBeRemoved[key]];
        };
    return registerFields;
    }
}
