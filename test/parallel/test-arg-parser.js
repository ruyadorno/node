'use strict';

const { createParser } = require('arg_parser');
const assert = require('assert');
const common = require('../common');
const child = require('child_process');
const nodejs = `"${process.execPath}"`;

// should read a boolean flag
{
  const fixture = require.resolve('../fixtures/arg-parser-read-boolean.js');
  child.exec(`${nodejs} ${fixture} --foo`, common.mustCall((err, stdout, stderr) => {
    assert.ifError(err);
    assert.strictEqual(stdout, 'ok');
    assert.strictEqual(stderr, '');
  }));
}
