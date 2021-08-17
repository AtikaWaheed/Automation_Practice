/// <reference types="Cypress" />

import { baseAPIUrl } from '../variables.js'

describe("Testing API Endpoints Using Cypress", ()=> {
 

    it('GET Request: Validate idBook parameter', () => {
        const randomNum = Math.floor(Math.random() * 5)
        cy.log(randomNum)
        cy.request(`${baseAPIUrl}/api/v1/Authors/authors/books/${randomNum}`)
        .its('body')
        .each(value=>{
            expect(value).to.have.property('idBook', randomNum)
        });
    });

    it('GET Request: Validate id parameter', () => {
        const randomNum = Math.floor(Math.random() * 10)
        cy.log(randomNum)
        cy.request(`${baseAPIUrl}/api/v1/Authors/${randomNum}`)
        .then((response)=>{
            expect(response.body).to.have.property('id', randomNum)
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
        });
    });

    it('POST Request: /api/v1/Authors', () => {
        cy.request({
            method: 'POST',
            url: `${baseAPIUrl}/api/v1/Authors`,
            body: {
                "id": 0,
                "idBook": 0,
                "firstName": "string",
                "lastName": "string"
            }
        }).then((response)=> {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
        });
        
    });

    it('PUT Request: Validate {id} parameter', () => {
        const randomNum = Math.floor(Math.random() * 10)
        cy.log(randomNum)
        cy.request({
            method: 'PUT',
            url: `${baseAPIUrl}/api/v1/Authors/${randomNum}`,
            body: {
                "id": 0,
                "idBook": 0,
                "firstName": "string",
                "lastName": "string"
            }
        }).then((response)=> {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
        });
    });

    it.only('DELETE Request: Validate {id} parameter', () => {
        const randomNum = Math.floor(Math.random() * 10)
        cy.log(randomNum)
        cy.request({
            method: 'DELETE',
            url: `${baseAPIUrl}/api/v1/Authors/${randomNum}`,
        }).then((response)=> {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response.body).to.be.empty;
        });
    });

});