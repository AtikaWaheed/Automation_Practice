/// <reference types="Cypress" />

describe("GET  Requests: Testing API Endpoints Using Cypress", () => {
 
    beforeEach(function(){ //not using => just to use the alias as alias may not run in arrows fund
        cy.request("https://fakerestapi.azurewebsites.net/api/v1/Authors")
        .as('allRequestMethods');
    });

    it('GET: JSON schema check - Test', () => {
        cy.request("https://fakerestapi.azurewebsites.net/api/v1/Authors")
        .its('body')
        .each(value=>{
            expect(value).to.have.all.keys("id", "idBook", "firstName", "lastName");
        });
    })

    it('GET: Header/Content-Type - Test', () => {
        cy.get('@allRequestMethods') //Header Content-Type from an API Response
        .its('headers')
        .its('content-type')
        .should('include', "application/json")
        .and('include', "charset=utf-8; v=1.0");
    })

    it('GET: Using Alias request, validate proprties and status', function(){
        cy.get('@allRequestMethods').should(response=> {
            expect(response.status).to.eq(200); // HTTP Status Code
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.empty;
            
        });
    })  
})
