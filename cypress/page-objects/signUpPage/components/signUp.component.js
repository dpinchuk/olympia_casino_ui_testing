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
const MOBILE_PHONE_CODE_ITEMS_INPUT = '.select-with-country-icons__dropdown';
const MOBILE_PHONE_NUMBER_INPUT = '#mobile_phone-number';
const SELECT_COUNTRY_INPUT = '#country';
const SELECT_COUNTRY_ITEMS_INPUT = '.select__option.option';
const ENTER_CITY_INPUT = '#city';
const ENTER_ADDRESS_INPUT = '#address';
const ENTER_POSTAL_CODE_INPUT = '#postal_code';
const CHECKBOX_RECEIVE_PROMOS_INPUT = 'label[for="receive_promos"]';
const CHECKBOX_RECEIVE_SMS_PROMOS_INPUT = 'label[for="receive_sms_promos"]';
const CHECKBOX_TERMS_ACCEPTANCE_INPUT = 'label[for="age_terms_acceptance"]';

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
    signUpMobilePhoneCodeItems() {
        return this.itself().get(MOBILE_PHONE_CODE_ITEMS_INPUT);
    },
    signUpMobilePhoneNumber() {
        return this.itself().get(MOBILE_PHONE_NUMBER_INPUT);
    },
    signUpSelectCountry() {
        return this.itself().get(SELECT_COUNTRY_INPUT);
    },
    signUpSelectCountryItems() {
        return this.itself().get(SELECT_COUNTRY_ITEMS_INPUT);
    },
    signUpEnterCity() {
        return this.itself().get(ENTER_CITY_INPUT);
    },
    signUpEnterAddress() {
        return this.itself().get(ENTER_ADDRESS_INPUT);
    },
    signUpEnterPostalCode() {
        return this.itself().get(ENTER_POSTAL_CODE_INPUT);
    },
    signUpCheckboxReceivePromos() {
        return this.itself().get(CHECKBOX_RECEIVE_PROMOS_INPUT);
    },
    signUpCheckboxReceiveSmsPromos() {
        return this.itself().get(CHECKBOX_RECEIVE_SMS_PROMOS_INPUT);
    },
    signUpCheckboxTermsAcceptance() {
        return this.itself().get(CHECKBOX_TERMS_ACCEPTANCE_INPUT);
    }
}

export {signUpComponent};
