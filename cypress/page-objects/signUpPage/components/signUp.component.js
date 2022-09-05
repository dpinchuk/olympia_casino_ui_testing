import '@testing-library/cypress/add-commands'

const COMPONENT = '.registration-dynamic-form.registration-form';
const EMAIL_INPUT = '#email';
const PASSWORD_INPUT = '#password_single';
const PASSWORD_INPUT_ICON = '.password-input__visibility-button';
const CURRENCY_INPUT = '#currency';
const CURRENCY_ITEMS = '.select__option';
const NEXT_BUTTON = 'button:contains(next)';

const signUpComponent = {
    itself() {
        return cy.get(COMPONENT);
    },
    signUpEmail() {
        return this.itself().get(EMAIL_INPUT);
    },
    signUpPassword() {
        return this.itself().get(PASSWORD_INPUT);
    },
    signUpPasswordIcon() {
        return this.itself().get(PASSWORD_INPUT_ICON);
    },
    signUpCurrency() {
        return this.itself().get(CURRENCY_INPUT);
    },
    signUpCurrencyItems() {
        return this.itself().get(CURRENCY_ITEMS);
    },
    signUpNext() {
        return this.itself().get(NEXT_BUTTON);
        // return this.itself().findByText('next') //it works!
    }
}

export {signUpComponent};
