karma-should-promised
===========

Promise assertions for Should.js on karma

Installation
------------

Install the module via npm

```sh
$ npm install karma-should-promised --save-dev
```

Add `should-promised` to the `frameworks` key in your Karma configuration.

```js
module.exports = function(config) {
  'use strict';
  config.set({
    #...
    frameworks: ['mocha', 'should-promised', 'should'],
    #...
  });
}
```
See [Should.js documentation](http://shouldjs.github.io/#assertion-promise).
