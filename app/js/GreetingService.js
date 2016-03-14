'use strict';

var Maths = require('./Maths');

var GreetingService = function () {

    var defaultName = "dear user";

    return {
        sayHello: function (name) {
            return "Hello " + (name ? name : defaultName);
        },
        saySomeMaths: function () {
            var a = Maths.sum(2, 3),
                b = Maths.sub(10, 8);
            return Maths.sum(a, b);
        }
    }
};

module.exports = new GreetingService();
