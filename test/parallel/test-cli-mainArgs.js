'use strict';

const common = require('../common');
const assert = require('assert');
const child = require('child_process');
const nodejs = `"${process.execPath}"`;

// Assert that mainArgs value is correct when using eval cli option
child.exec(
  `${nodejs} --eval "console.log(process.mainArgs.join(' '))" one two three`,
  common.mustCall((err, stdout, stderr) => {
    assert.ifError(err);
    assert.strictEqual(stdout, 'one two three\n');
    assert.strictEqual(stderr, '');
  }));

// Assert that mainArgs value is correct when using print cli option
child.exec(
  `${nodejs} --print process.mainArgs one two three`,
  common.mustCall((err, stdout, stderr) => {
    assert.ifError(err);
    assert.strictEqual(stdout, '[ \'one\', \'two\', \'three\' ]\n');
    assert.strictEqual(stderr, '');
  }));
