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
        signUpComponent.signUpCurrencyItems().each(($element, index, list) => {
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
            return signUpComponent.signUpBirthYear().type(year).tab();
        })
    },
};

export {signUpSteps};
