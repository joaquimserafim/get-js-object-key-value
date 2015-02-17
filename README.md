# get-js-object-key-value

Return the key and value of the given JS Object

<a href="https://nodei.co/npm/get-js-object-key-value/"><img src="https://nodei.co/npm/get-js-object-key-value.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/get-js-object-key-value)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/get-js-object-key-value/blob/master/LICENSE)

## API

>var getKeyValue = require('get-js-object-key-value')

>getKeyValue(object:*JSObject*)

the *JSObject* can be an object with one or more properties 

### Return

*   one property should return a **js object** with *{key, value}*
*   more than one property should return an **array** with *[{key, value}, {key, value}]*
*   **undefined** in case to pass an empty JS Object

## Usage

``` js
var getKeyValue = require('get-js-object-key-value');

var scripts = require('./package.json').scripts;

var arr = getKeyValue(scripts);

[ 
  { key: 'test', value: 'lab -v -c test.js' },
  { key: 'jshint', value: 'jshint -c .jshintrc *.js' },
  { key: 'code-style', value: 'jscs -p google *.js' },
  { key: 'check-coverage',
    value: 'lab -t 100 -r html -o coverage.html test.js' },
  { key: 'open-coverage', value: 'open coverage.html' }
]

```

## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
