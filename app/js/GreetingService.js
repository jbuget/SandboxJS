(function () {

    'use strict';

    var GreetingService = function () {

        var defaultName = "dear user";

        return {
            sayHello: function (name) {
                return "Hello " + (name ? name : defaultName);
            }
        }
    };

    module.exports = GreetingService;

})();
