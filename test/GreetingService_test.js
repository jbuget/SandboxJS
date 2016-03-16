describe('GreetingService', function () {

    var GreetingService = require('../app/js/GreetingService'),
        Maths = require('../app/js/Maths');

    describe('#sayHello()', function () {

        // Mocha style

        it('[Mocha] should return message with default name when the value is not present', function () {
            // when
            var message = GreetingService.sayHello();

            // then
            assert.equal("Hello dear user", message);
        });

        it('[Mocha] should return message with given name when the value is present', function () {
            // when
            var message = GreetingService.sayHello("John Doe");

            // then
            assert.equal("Hello John Doe", message);
        });

        // Chai style

        it('[Chai] should return message with default name when the value is not present', function () {
            // when
            var message = GreetingService.sayHello();

            // then
            message.should.equal('Hello dear user');
        });

        it('[Chai] should return message with given name when the value is present', function () {
            // when
            var message = GreetingService.sayHello("John Doe");

            // then
            message.should.equal('Hello John Doe');
        });

    });

    describe('#saySomeMaths()', function () {

        after(function () {
            Maths.add.restore();
        });

        it('should return 7', function () {
            // when
            var result = GreetingService.saySomeMaths();

            // then
            result.should.equal(7);
        });

        it('should call Maths#add and Maths#minus', function () {
            // given
            var stub = sinon.stub(Maths, 'add').returns(10);

            // when
            var result = GreetingService.saySomeMaths();

            // then
            result.should.equal(10);
        });
    });
});