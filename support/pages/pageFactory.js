var PageFactory = function(){
    var _this = this;
    _this.currentPage = 'undefined';

    _this.getPage = function(name) {
        var pages = {
			'home': require('../page/homePage'),
        };

        if(!pages[name]) {
            throw new Error('No such page: ' + name);
        }

        _this.currentPage = new pages[name];
        return _this.currentPage;
    };
};

module.exports = new PageFactory();
