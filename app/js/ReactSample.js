'use strict';

var $ = require('jquery'),
    React = require('react'),
    ReactDOM = require('react-dom');

$(function() {
    ReactDOM.render(
        React.createElement('span', null, 'React is up!'),
        $('#react-component')[0]
    );
});
