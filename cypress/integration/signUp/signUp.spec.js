import {homeSteps} from '../../page-steps/home/home.steps'
import {signUpSteps} from '../../page-steps/signUp/signUp.steps'

describe('Sign up a new user account', () => {
    it('should sign up a new user account', () => {
        homeSteps.openHomePage();
        homeSteps.clickSignUpButton();
        signUpSteps.enterEmail();
        signUpSteps.enterPassword();
        signUpSteps.selectCurrency('AUD');
        signUpSteps.clickNext();
        signUpSteps.enterFirstName();
        signUpSteps.enterLastName();
        signUpSteps.enterBirthDay();
        signUpSteps.enterBirthMonth();
        signUpSteps.enterBirthYear();
        signUpSteps.enterMobilePhoneNumber();
        signUpSteps.clickNext();
        //expect...
    });
})
