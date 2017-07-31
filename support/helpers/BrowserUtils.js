var World = require('../world');
var BrowserUtils = function(world){

    this.clearLocalStorage = function (){
        return browser.executeScript('window.localStorage.clear();');
    };

    this.navigateTo = function(page){
        // console.log('nav');
        world.pageFactory.getPage(page);

        return world.pageFactory.currentPage.then(function(url){
            return browser.get(url);
        });
    };


};

module.exports = new BrowserUtils(World);
