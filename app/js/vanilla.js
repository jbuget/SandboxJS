var Article = require('./Article'),
    GreetingService = require('./GreetingService');

(function() {

    'use strict';

    console.log("Vanilla JS is up!");

    var article = new Article();
    article.loadAndRenderArticle();

    var greetingService = new GreetingService();
    console.log(greetingService.sayHello("Mister Mojito"));

})();