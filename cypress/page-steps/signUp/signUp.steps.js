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
        })
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
};

export {signUpSteps};
