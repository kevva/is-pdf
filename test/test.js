'use strict';

var isPdf = require('../');
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');

test('should detect PDF from buffer', function (t) {
    t.plan(2);

    readChunk(path.join(__dirname, 'fixtures/test.pdf'), 0, 5, function (err, buf) {
        t.assert(!err);
        t.assert(isPdf(buf));
    });
});
