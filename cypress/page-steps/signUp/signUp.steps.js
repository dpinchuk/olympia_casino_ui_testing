import 'cypress-plugin-tab';
import '../../support/commands';
import {signUpComponent} from '../../page-objects/signUpPage/components/signUp.component';
import {emailService} from '../../configs/endpoints.config';

const signUpSteps = {
    enterEmail() {
        cy.getEmail(emailService.url, emailService.method, 'Email').then(email => {
            return signUpComponent.signUpEmail().type(email);
        });
    },
    enterPassword() {
        cy.generatePassword().then(password => {
            return signUpComponent.signUpPassword().type(password);
        });
    },
    selectCurrency(currency) {
        signUpComponent.signUpCurrency().click();
        signUpComponent.signUpCurrencyItems().each(($element) => {
            if ($element.text() === currency) {
                cy.get($element).click();
            }
        });
    },
    clickNext() {
        return signUpComponent.signUpNext().click();
    },
    enterFirstName() {
        cy.generateString('firstName').then(firstName => {
            return signUpComponent.signUpFirstName().type(firstName);
        });
    },
    enterLastName() {
        cy.generateString('lastName').then(lastName => {
            return signUpComponent.signUpLastName().type(lastName);
        });
    },
    selectMobilePhoneCode(code) {
        signUpComponent.signUpMobilePhoneCode().click();
        signUpComponent.signUpMobilePhoneCodeItems().each(($element) => {
            cy.get($element).children().each($item => {
                if ($item.text() === code) {
                    cy.get($item).click();
                }
            });
        });
    },
    enterMobilePhoneNumber() {
        cy.generateString('mobileNumber').then(mobileNumber => {
            return signUpComponent.signUpMobilePhoneNumber().type(mobileNumber);
        });
    },
    enterBirthDay() {
        cy.generateString('day').then(day => {
            return signUpComponent.signUpBirthDay().type(day);
        });
    },
    enterBirthMonth() {
        cy.generateString('month').then(month => {
            return signUpComponent.signUpBirthMonth().type(month);
        });
    },
    enterBirthYear() {
        cy.generateString('year').then(year => {
            return signUpComponent.signUpBirthYear().type(year);
        })
    },
    selectCountry(country) {
        signUpComponent.signUpSelectCountry().click();
        signUpComponent.signUpSelectCountryItems().each(($element) => {
            if ($element.text() === country) {
                cy.get($element).click();
            }
        });
    },
    enterCity() {
        cy.generateString('city').then(city => {
            return signUpComponent.signUpEnterCity().type(city);
        });
    },
    enterAddress() {
        cy.generateString('address').then(address => {
            return signUpComponent.signUpEnterAddress().type(address);
        });
    },
    enterPostalCode() {
        cy.generateString('postal_code').then(postal_code => {
            return signUpComponent.signUpEnterPostalCode().type(postal_code);
        });
    },
    clickReceivePromos(bool) {
        return (bool) ? (() => {
            return signUpComponent.signUpCheckboxReceivePromos().click();
        })() : (() => {
            return 0
        })
    },
    clickReceiveSmsPromos(bool) {
        return (bool) ? (() => {
            return signUpComponent.signUpCheckboxReceiveSmsPromos().click();
        })() : (() => {
            return 0
        })
    },
    clickTermsAcceptance(bool) {
        return (bool) ? (() => {
            return signUpComponent.signUpCheckboxTermsAcceptance().click();
        })() : (() => {
            return 0
        })
    },
};

export {signUpSteps};
