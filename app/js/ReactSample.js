var React = require('react'),
    ReactDOM = require('react-dom');

(function (ReactDOM) {

    'use strict';

    ReactDOM.render(
        React.createElement('span', null, 'React is up!'),
        document.getElementById('react-component')
    );

})(ReactDOM);
