/// <reference types="Cypress" />


export const baseUrl = 'http://automationpractice.com/index.php'
export const createAccountText = 'Please enter your email address to create an account.'
export const welcomeMessage = 'Welcome to your account. Here you can manage all of your personal information and orders.'



//Error Messages

export const errEmail = 'Invalid email address.'
export const errFirstName = 'firstname is required.'
export const errLastName = 'lastname is required.'
export const errPassword = 'passwd is required.'
export const errAddress = 'address1 is required.'
export const errCity = 'city is required.'
export const errCountry = 'id_country is required.'
export const errState = 'This country requires you to choose a State.'
export const errZip = "The Zip/Postal code you've entered is invalid. It must follow this format: 00000"
export const errAliasAddress = 'alias is required.'
export const errPhone = 'You must register at least one phone number.'
export const alreadyRegisteredError =  'An account using this email address has already been registered. Please enter a valid password or request a new one.'