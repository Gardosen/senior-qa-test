const Page = require('./Page');
const Locator = require('../../support/objects/locator.js');

class SearchPage extends Page {

    get path () { return "/suche"};

    //page locators
    selectors = {
        'category headline': new Locator('xpath', '//*[@id="categoryHeaderContainer"]/div/h1'),
        'result list view': new Locator('xpath', '//*[@id="filterProducts"]/div'),
        'result list view elements': new Locator('xpath', '//*[@id="filterProducts"]/div/div[@class="articleTile"]'),
    }
}

module.exports = new SearchPage();