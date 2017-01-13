'use strict';
/* eslint-env mocha */
const assert = require('assert');
const grunt = require('grunt');

it('should transpile', () => {
	assert(/GeneratorFunction/.test(grunt.file.read('test/tmp/transpiled.js')));
});
