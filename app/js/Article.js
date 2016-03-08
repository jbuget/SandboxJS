(function () {

    'use strict';

    var Article = function () {

        function fetch(callback) {
            $.getJSON("data/article.json", function (data) {
                callback(data);
            });
        }

        function render(article) {
            $(".page-title > h1").html(article.title);
            $(".page-body > article").html(article.content);
        }

        return {
            loadAndRenderArticle: function () {
                fetch(render);
            }
        }
    };

    module.exports = Article;

})();
