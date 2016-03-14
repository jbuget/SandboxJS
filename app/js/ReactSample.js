var React = require('react'),
    ReactDOM = require('react-dom');

(function () {

    'use strict';

    ReactDOM.render(
        React.createElement('span', null, 'React is up!'),
        $('#react-component')[0]
    );

})();
