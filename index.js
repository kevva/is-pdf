'use strict';

/**
 * Check if a Buffer/Uint8Array is a PDF file
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
    if (!buf || buf.length < 4) {
        return false;
    }

    return buf[0] === 37 && buf[1] === 80 && buf[2] === 68 && buf[3] === 70;
};
