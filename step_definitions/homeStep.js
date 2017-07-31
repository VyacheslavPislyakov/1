var {defineSupportCode} = require('cucumber');
var pageFactory = require('../support/pages/pageFactory.js');
var PageFactory = require('../po/page/PageFactory');

defineSupportCode(({When}) => {

	When(/^I on home$/, function () {
		return pageFactory.getPage('home').visit();
    });

});
