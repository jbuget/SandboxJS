var should = require('chai').should();

describe('mocha_sample', function () {

    describe('#indexOf()', function () {

        it('should return -1 when the value is not present', function () {
            [1, 2, 3].indexOf(5).should.equal(-1);
            [1, 2, 3].indexOf(0).should.equal(-1);
        });

        it('should return the position of the value (with first element position is 0) in the array when it is present', function () {
            [1, 2, 3].indexOf(1).should.equal(0);
            [1, 2, 3].indexOf(2).should.equal(1);
            [1, 2, 3].indexOf(3).should.equal(2);
        });

    });

});