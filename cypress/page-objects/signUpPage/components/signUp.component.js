import '@testing-library/cypress/add-commands'

const COMPONENT = '.registration-dynamic-form.registration-form';
const EMAIL_INPUT = '#email';
const PASSWORD_INPUT = '#password_single';
const PASSWORD_INPUT_ICON = '.password-input__visibility-button';
const CURRENCY_INPUT = '#currency';
const CURRENCY_ITEMS = '.select__option';
const NEXT_BUTTON = 'button:contains(next)';
const FIRST_NAME_INPUT = '#first_name';
const LAST_NAME_INPUT = '#last_name';
const BIRTH_DAY_INPUT = 'input[name="date_of_birth_day"]';
const BIRTH_MONTH_INPUT = 'input[name="date_of_birth_month"]';
const BIRTH_YEAR_INPUT = 'input[name="date_of_birth_year"]';
const MOBILE_PHONE_CODE_INPUT = '#mobile_phone-code';
const MOBILE_PHONE_NUMBER_INPUT = '#mobile_phone-number';

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
    },
    signUpFirstName() {
        return this.itself().get(FIRST_NAME_INPUT);
    },
    signUpLastName() {
        return this.itself().get(LAST_NAME_INPUT);
    },
    signUpBirthDay() {
        return this.itself().get(BIRTH_DAY_INPUT);
    },
    signUpBirthMonth() {
        return this.itself().get(BIRTH_MONTH_INPUT);
    },
    signUpBirthYear() {
        return this.itself().get(BIRTH_YEAR_INPUT);
    },
    signUpMobilePhoneCode() {
        return this.itself().get(MOBILE_PHONE_CODE_INPUT);
    },
    signUpMobilePhoneNumber() {
        return this.itself().get(MOBILE_PHONE_NUMBER_INPUT);
    }
}

export {signUpComponent};
