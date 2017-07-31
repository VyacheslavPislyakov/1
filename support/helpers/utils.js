var Utils = function(world){
	this.navigateTo = function(page){
        // console.log('nav');
        world.pageFactory.getPage(page);

        return world.pageFactory.currentPage.then(function(url){
            return browser.get(url);
        });
    };

};

module.exports = new Utils();
