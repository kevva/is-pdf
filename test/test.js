/*global describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var isPdf = require('../');
var path = require('path');

describe('isPdf()', function () {
    function check(file) {
        return isPdf(fs.readFileSync(file));
    }

    it('should detect PDF from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.pdf')));
        cb();
    });
});
