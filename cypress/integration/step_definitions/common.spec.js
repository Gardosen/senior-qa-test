const {Then, When, Given} = require("cypress-cucumber-preprocessor/steps");

Then(/^(?:I am|User is) on the (.* page)$/, function (pageDescription) {
    const url = cy.pageMap.getPageUrl(pageDescription);
    cy.url().should('include', url);
    cy.scope.currentPage = pageDescription;
    cy.scope.currentPageObject = cy.pageMap.getPage(pageDescription);
});

When(/^I (?:reject|accept) the (cookie policy) by clicking the (save settings button|accept all cookies button)$/, function (domElement, button) {
    cy.helper.getElement(domElement).should('be.visible');
    cy.helper.clickElement(button);
});

Given(/^User goes to the (.*)$/, function(pageDescription) {
    cy.helper.goto(pageDescription);
});