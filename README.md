# is-pdf [![Build Status](https://travis-ci.org/kevva/is-pdf.svg?branch=master)](https://travis-ci.org/kevva/is-pdf)

> Check if a Buffer/Uint8Array is a PDF file

## Install

```bash
$ npm install --save is-pdf
```

```bash
$ component install kevva/is-pdf
```

```bash
$ bower install --save is-pdf
```

## Usage

```js
var fs = require('fs');
var isPdf = require('is-pdf');
var buf = fs.readFileSync('foo.pdf');

isPdf(buf);
// => true
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
