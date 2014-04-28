/*global describe, it */
'use strict';

var assert = require('assert');
var isPdf = require('../');
var path = require('path');
var readChunk = require('read-chunk');

describe('isPdf()', function () {
    function check(file) {
        return isPdf(readChunk.sync(file, 0, 4));
    }

    it('should detect PDF from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.pdf')));
        cb();
    });
});
