// require all modules ending in "_test" from the
// current directory and all subdirectories
var context = require.context(".", true, /_test\.js$/);
context.keys().forEach(context);
module.exports = context;