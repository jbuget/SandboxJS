'use strict';

var Maths = function () {

    function _sum(a, b) {
        return a + b;
    }

    function _sub(a, b) {
        return a - b;
    }

    return {
        sum: function (a, b) {
            return _sum(a, b);
        },
        sub: function (a, b) {
            return _sub(a, b);
        }
    }

};

module.exports = new Maths();
