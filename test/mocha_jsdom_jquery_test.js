describe('Mocha with JSDom and jQuery', function() {

    var $ = require('jquery'),
        jsdom = require('mocha-jsdom');

    jsdom();

    it('works', function () {
        document.body.innerHTML = '<div>hola</div>';
        expect($("div").html()).eql('hola');
    });

});