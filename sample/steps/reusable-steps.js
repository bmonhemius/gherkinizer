/**
 * THIS IS AN AUTO GENERATED FILE, PLEASE DO NOT EDIT
 */
defineStep(/^I open the login page$/, () => {
    cy.visit('https://localhost/WebConsole/login');

})
defineStep(/^I open the devices page$/, () => {
    cy.visit('https://localhost/WebConsole/devices');

})
defineStep(/^I enter username '(.+)'$/, () => {
    var e = cy.get('[placeholder="Username"]');
    e.type('$1');
    if ('undefined' != 'undefined') {
        e.type('undefined');
    }

})
defineStep(/^I enter password '(.+)'$/, () => {
    var e = cy.get('[placeholder="Password"]');
    e.type('$1');
    if ('undefined' != 'undefined') {
        e.type('undefined');
    }

})
defineStep(/^I click on the LOG_IN button$/, () => {
    cy.get('.primary').click();

})
defineStep(/^I click on the search entry box$/, () => {
    cy.get('.TailCursorContent').click();

})
defineStep(/^I enter search field '(.+)'$/, () => {
    var e = cy.get('.search-input .input[tabindex="1"]');
    e.type('$1');
    if ('{enter}' != 'undefined') {
        e.type('{enter}');
    }

})
defineStep(/^I choose the search operator '(.+)'$/, () => {
    cy.get('soti-dropdown-node i.ngui-icon-operator$1').click();

})
defineStep(/^I enter search value '(.+)'$/, () => {
    var e = cy.get('.search-input .input[tabindex="3"]');
    e.type('$1');
    if ('undefined' != 'undefined') {
        e.type('undefined');
    }

})
defineStep(/^I click on search DONE$/, () => {
    cy.get('search-dropdown .primary').click();

})
defineStep(/^I start the search$/, () => {
    cy.get('.query-button-base.search-button.highlight').click();

})
defineStep(/^I expect device count to be '(.+)'$/, () => {
    cy.get('[id="device-count"] span:nth-child(2)').should('have.html', '$1');

})
defineStep(/^I click on the clear query button$/, () => {
    cy.get('.query-button-base.clear-button').click();

})