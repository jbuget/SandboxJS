var should = require('chai').should(),
    Article = require('../app/js/Article');

describe('Article', function () {

    describe('#fakeLoadAndRenderArticle()', function () {

        xit('should populate DOM with article data', function () {
            // given
            var article = new Article(),
                fixture = '' +
                '<html>' +
                '<body>' +
                '   <article>' +
                '       <header><h1>--</h1></header>' +
                '       <section>--</section>' +
                '   </article>' +
                '</div>' +
                '</body>' +
                '</html>';

            // when
            article.fakeLoadAndRenderArticle();

            // then
            $('article > header > h1').html().should.equal('[article.title]');
            $('article > section').html().should.equal('[article.content]');
        });

    });

});