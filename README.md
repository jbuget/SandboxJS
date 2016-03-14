# SandboxJS

## Prerequesites

* NodeJS
* NPM
* Gulp

## NPM Modules
```bash
$ npm install -g webpack
$ npm install -g less
$ npm install -g coffee-script
$ npm install -g karma
$ npm install -g mocha
$ npm install -g phantomjs
```

## Launch the application

```bash
$ npm install # downloads all JS dependencies
$ webpack # pre-processes static resources
```

Then, in a browser, open the file ```./build/index.html```.

## Webpack-dev-server

```bash
$ npm run dev # runs Webpack in watching mode
```

Then, in a browser, access the URL http://localhost:8080/webpack-dev-server/index.html

## Testing

```bash
$ npm test # executes Mocha tests in watching mode
```
