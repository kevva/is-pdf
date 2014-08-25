# is-pdf [![Build Status](https://travis-ci.org/kevva/is-pdf.svg?branch=master)](https://travis-ci.org/kevva/is-pdf)

> Check if a Buffer/Uint8Array is a PDF file

## Install

```sh
$ npm install --save is-pdf
```

## Usage

```js
var isPdf = require('is-pdf');
var read = require('fs').readFileSync;

isPdf(read('foo.pdf'));
// => true
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
