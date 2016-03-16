var should = require('chai').should(),
    Maths = require('../app/js/Maths');

describe('Maths', function() {

    describe('#add', function() {

        it('should add \'b\' to \'a\'', function () {
            Maths.add(0, 0).should.equal(0);
            Maths.add(0, 1).should.equal(1);
            Maths.add(1, 0).should.equal(1);
            Maths.add(1, 1).should.equal(1);
        });
    });

    describe('#minus', function() {

        it('should subtract \'b\' from \'a\'', function () {
            Maths.minus(0, 0).should.equal(0);
            Maths.minus(0, 1).should.equal(-1);
            Maths.minus(1, 0).should.equal(1);
            Maths.minus(1, 1).should.equal(0);
        });
    });

});
