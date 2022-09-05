const COMPONENT = '.layout__header.header';
const SIGN_UP = 'a[data-seo-id="sign up main button"]';

/**
 * @type {{itself(): Cypress.Chainable<JQuery<HTMLElement>>}}
 * @mixin
 */
const headerComponent = {
    itself() {
        return cy.get(COMPONENT);
    },
    signUpButton() {
        return this.itself().get(SIGN_UP);
    },
}

export {headerComponent};
