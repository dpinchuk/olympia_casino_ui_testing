import {homePage} from '../../page-objects/homePage/home.page';
import {headerComponent} from "../../page-objects/homePage/components/header.component";

const homeSteps = {
    openHomePage() {
        cy.clearCookies();
        return homePage.visit();
    },
    clickSignUpButton() {
        return headerComponent.signUpButton().click();
    },
};

export {homeSteps};
