var assert = require('assert'),
    GreetingService = require('../app/js/GreetingService.js');

describe('GreetingService', function() {

    describe('#sayHello()', function () {

        it('should return message with default name when the value is not present', function () {
            // given
            var greetingService = new GreetingService();

            // when
            var message = greetingService.sayHello();

            // then
            assert.equal("Hello dear user", message);
        });

        it('should return message with given name when the value is present', function () {
            // given
            var greetingService = new GreetingService();

            // when
            var message = greetingService.sayHello("John Doe");

            // then
            assert.equal("Hello John Doe", message);
        });

    });

});