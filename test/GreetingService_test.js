var GreetingService = require('../app/js/GreetingService.js'),
    assert = require('assert'),
    should = require('chai').should();

describe('GreetingService', function() {

    describe('#sayHello()', function () {

        // Mocha style

        it('[Mocha] should return message with default name when the value is not present', function () {
            // given
            var greetingService = new GreetingService();

            // when
            var message = greetingService.sayHello();

            // then
            assert.equal("Hello dear user", message);
        });

        it('[Mocha] should return message with given name when the value is present', function () {
            // given
            var greetingService = new GreetingService();

            // when
            var message = greetingService.sayHello("John Doe");

            // then
            assert.equal("Hello John Doe", message);
        });

        // Chai style

        it('[Chai] should return message with default name when the value is not present', function () {
            // given
            var greetingService = new GreetingService();

            // when
            var message = greetingService.sayHello();

            // then
            message.should.equal('Hello dear user');
        });

        it('[Chai] should return message with given name when the value is present', function () {
            // given
            var greetingService = new GreetingService();

            // when
            var message = greetingService.sayHello("John Doe");

            // then
            message.should.equal('Hello John Doe');
        });

    });

});