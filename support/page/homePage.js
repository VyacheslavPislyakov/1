var inheritator = require('../helpers/ingeritance');
var BasePage = require('./BasePage.js');


var MainPage = function (){
  this.url = 'https://www.ford.com/';
};

inheritator.inherits(BasePage, MainPage);

module.exports = MainPage;
