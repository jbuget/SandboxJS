var Article = function () {

    function fetch(callback) {
        $.getJSON("data/article.json", function (data) {
            callback(data);
        });
    }

    function fakeFetch(callback) {
        var article = {
            "meta": {
                "author": '[article.meta.author]',
                "publicationDate": '[article.meta.publicationDate]',
                "tags": ['[article.meta.tags.1]', '[article.meta.tags.1]', '[article.meta.tags.1]']
            },
            "title": '[article.title]',
            "content": '[article.content]'
        };
        callback(article);
    }

    function render(article) {
        $(".page-title > h1").html(article.title);
        $(".page-body > article").html(article.content);
    }

    return {
        loadAndRenderArticle: function () {
            fetch(render);
        },
        fakeLoadAndRenderArticle: function () {
            fakeFetch(render);
        }
    }
};

module.exports = Article;

