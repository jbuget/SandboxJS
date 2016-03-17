# SandboxJS

SandboxJS is a pet project for testing a lot of JS stuff like Webpack, React, Babel, Mocha, Karma, etc.

## Prerequesites

* [Node.js](https://nodejs.org) with [NPM](https://www.npmjs.com/)
* NPM global dependencies :
    * webpack
    * webpack-dev-server
    * karma
    * karma-cli

   ```
   $ npm install -g webpack webpack-dev-server karma karma-cli
   ```

## First launch (less than 5 minutes)

1. Clone the project sources
   ```
   $ git clone git@github.com:jbuget/SandboxJS.git
   ```

2. Download the NPM dependencies
   ```
   $ npm install
   ```

3. Run the tests
   ```
   $ npm test
   ```

4. Launch the application
   ```
   $ npm start
   ```

5. Access the application

   ```
   http://localhost:8080
   ```


## Browser auto-refresh

If you access http://localhost:8080/webpack-dev-server, a WebSocket is created and the application is running in an
Iframe, that automatically refresh the page whenever a change is done in the code.

It is because the application is actually running through an Express server, thanks to webpack-dev-server tool, cf. task
`start` in "scripts" section of `package.json` file.

## Code coverage

The code coverage is automatically calculated and an report is automatically generated during `test` task.

You can access the report in HTML format by opening file `coverage/PhantomJS/index.html` (in case you ran karma tests
with – default – PhantomJS launcher, cf. karma.conf.js).
