var Maths = require('./Maths');

var GreetingService = (function () {

    var defaultName = "dear user";

    function getName(name) {
        return (name ? name : defaultName);
    }

    return {

        sayHello: function (name) {
            return "Hello " + getName(name);
        },

        saySomeMaths: function () {
            var a = Maths.add(2, 3),
                b = Maths.minus(10, 8);
            return Maths.add(a, b);
        }
    }
})();

module.exports = GreetingService;
