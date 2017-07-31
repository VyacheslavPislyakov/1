
var {defineSupportCode} = require('cucumber');
var pageFactory = require('../support/pages/pageFactory.js')
// var Utils = require('../support/helpers/utils.js');

defineSupportCode(({When}) => {

	When(/^I on home$/, function () {
		return pageFactory.getPage('home').visit();
    });

});
