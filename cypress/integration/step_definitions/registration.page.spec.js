const {When} = require("cypress-cucumber-preprocessor/steps");


When(/^I select (.*) on the (salutation selection)$/, function (salutation, domElement) {
    cy.helper.select(salutation, domElement);
});