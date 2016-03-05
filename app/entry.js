require('./css/clear.css');
require('./less/styles.less');
require('./coffee/example.coffee');
require('./js/vanilla.js');

var $ = require('jquery');
window.$ = $;
window.jQuery = $;

$(".page-title > h1").html("jQuery is up!");

