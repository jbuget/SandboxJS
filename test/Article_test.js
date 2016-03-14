var $ = require('jquery'),
    assert = require('assert'),
    should = require('chai').should(),
    sinon = require('sinon'),
    Article = require('../app/js/Article');

describe('Article', function () {

    describe('#fakeLoadAndRenderArticle()', function () {

        it('should populate DOM with article data', function () {
            // given

            var article = new Article();

            // when
            article.fakeLoadAndRenderArticle();

            // then

        });

    });

});