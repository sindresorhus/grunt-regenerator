/*global describe, it */
'use strict';
var assert = require('assert');
var grunt = require('grunt');

describe('regenerator', function () {
	it('transpile', function () {
		var actual = grunt.file.read('test/tmp/transpiled.js');
		var expected = grunt.file.read('test/fixture/expected.js');
		assert.equal(actual, expected);
	});
});
