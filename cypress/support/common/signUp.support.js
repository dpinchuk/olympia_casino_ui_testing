import '../commands';
import {signUpSteps} from "../../page-steps/signUp/signUp.steps";

Cypress.Commands.add('signUp', (currency, mobilePhoneCode, country, isReceivePromos, isReceiveSmsPromos, isTermsAcceptance) => {
    signUpSteps.enterEmail();
    signUpSteps.enterPassword();
    signUpSteps.selectCurrency(currency);
    signUpSteps.clickNext();
    signUpSteps.enterFirstName();
    signUpSteps.enterLastName();
    signUpSteps.enterBirthDay();
    signUpSteps.enterBirthMonth();
    signUpSteps.enterBirthYear();
    signUpSteps.selectMobilePhoneCode(mobilePhoneCode);
    signUpSteps.enterMobilePhoneNumber();
    signUpSteps.clickNext();
    signUpSteps.selectCountry(country);
    signUpSteps.enterCity();
    signUpSteps.enterAddress();
    signUpSteps.enterPostalCode();
    signUpSteps.clickReceivePromos(isReceivePromos);
    signUpSteps.clickReceiveSmsPromos(isReceiveSmsPromos);
    signUpSteps.clickTermsAcceptance(isTermsAcceptance);
});
