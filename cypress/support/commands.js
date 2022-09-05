import { faker } from '@faker-js/faker';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('getEmail', (url, method, responseKey) => {
    cy.request({
        url: url,
        method: method,
    })
        .as('getEmailFromService')
        .then(response => {
            // expect(response).property('status').to.equal(200);
            // expect(response.body).property(responseKey).to.not.be.oneOf([null, ""]);
            const respBody = response.body;
            return respBody[responseKey];
        });
});

Cypress.Commands.add('generatePassword', () => {
    const uniqueSeed = Date.now().toString();
    return Cypress._.uniqueId(uniqueSeed);
});

Cypress.Commands.add('generateString', (type) => {
    if (type === 'firstName') {
        return faker.name.firstName();
    } else if (type === 'lastName') {
        return faker.name.firstName();
    } else if (type === 'mobileNumber') {
        return faker.phone.phoneNumber('#########');
    } else if (type === 'day') {
        let min = 1;
        let max = 28;
        const index = Math.floor(Math.random() * (max - min + 1)) + min;
        return index.toString();
    } else if (type === 'month') {
        let min = 1;
        let max = 12;
        const index = Math.floor(Math.random() * (max - min + 1)) + min;
        return index.toString();
    } else if (type === 'year') {
        let min = 1970;
        let max = 2007;
        const index = Math.floor(Math.random() * (max - min + 1)) + min;
        return index.toString();
    }
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
