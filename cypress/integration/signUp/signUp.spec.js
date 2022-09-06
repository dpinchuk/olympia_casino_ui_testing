import '../../support/common/signUp.support';
import {homeSteps} from '../../page-steps/home/home.steps'

describe('Sign up a new user account', () => {
    it('should sign up a new user account', () => {
        homeSteps.openHomePage();
        homeSteps.clickSignUpButton();
        cy.signUp('AUD', '+1', 'Turkey', true, true, true);
        //Click SIGN_UP...;
    });
})
