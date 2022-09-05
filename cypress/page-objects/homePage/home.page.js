import {homePageURL} from "../../configs/endpoints.config";

const homePage = {
    visit() {
        return cy.visit(homePageURL);
    }
}

export {homePage};
