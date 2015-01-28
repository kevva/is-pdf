# is-pdf [![Build Status](http://img.shields.io/travis/kevva/is-pdf/master.svg?style=flat)](https://travis-ci.org/kevva/is-pdf)

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
//=> true
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
