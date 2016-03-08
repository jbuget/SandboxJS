var Article = require('./Article.js');

(function(Article) {

    'use strict';

    console.log("Vanilla JS is up!");

    var article = new Article();
    article.loadAndRenderArticle();

})(Article);