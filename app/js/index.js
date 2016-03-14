'use strict';

var Article = require('./Article'),
    GreetingService = require('./GreetingService'),
    Maths = require('./Maths');

$(function() {
    console.log("index.js is up!");

    var article = new Article();
    article.loadAndRenderArticle();

    console.log(GreetingService.sayHello("Mister Mojito"));

    console.log("2 + 3 = " + Maths.sum(2, 3));
    console.log("10 - 8 = " + Maths.sub(10, 8));

});

